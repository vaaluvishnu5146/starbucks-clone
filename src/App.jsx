import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import CartModal from "./components/Modal/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          setProducts(result.products);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const value = cart.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0);
    setCartValue(value);
  }, [cart]);

  function toggle() {
    setCartOpen((prev) => !prev);
  }

  function addToCart(e, data = {}) {
    const dataEnriched = {
      ...data,
      quantity: 1,
    };
    const cartCopy = [...cart];
    cartCopy.push(dataEnriched);
    setCart(cartCopy);
  }

  function isItemAddedToCart(id) {
    const matchingItem = cart.find((item) => item.id === id);
    if (matchingItem) return true;
    return false;
  }

  function cartItemQuantityChange(e, type, id) {
    let modifiedData = [];
    if (type === "dec") {
      modifiedData = cart.map((item) => {
        if (item.id === id) {
          item.quantity -= 1;
        }
        return item;
      });
    } else {
      modifiedData = cart.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });
    }
    setCart(modifiedData);
  }

  return (
    <>
      <Header length={cart.length} cartToggle={toggle} />
      <div className="px-2">
        <div className="mb-5"></div>
        <h1 className="mb-3">WELCOME TO STAR BUCKS</h1>
        <div>
          {products.map((p, index) => (
            <ListItem
              key={`${p.name}-${index}`}
              data={p}
              addToCart={addToCart}
              disabled={isItemAddedToCart(p.id)}
            />
          ))}
        </div>
        <CartModal
          isOpen={cartOpen}
          toggle={toggle}
          items={cart}
          quantityChange={cartItemQuantityChange}
          totalCartPrice={cartValue}
        />
      </div>
    </>
  );
}

export default App;

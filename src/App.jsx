import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import CartModal from "./components/Modal/CartModal";
import TotalProducts from "./components/TotalProducts";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const cartTotal = useMemo(() => calculateCartQuantity(cart), [cart]);
  const toggleModal = useCallback(() => toggle(), []);

  function calculateCartQuantity(items = []) {
    let totalCartPrice = 0;
    items.forEach((item) => {
      totalCartPrice += item.price * item.quantity;
    });
    return totalCartPrice;
  }

  function handleAddToCart(e, data = {}) {
    e.stopPropagation();
    if (data) {
      setCart((prev) => [...prev, { ...data, quantity: 1 }]);
    }
  }

  function isAddedToCart(cartSource = [], item = {}) {
    return cartSource.some((cartItem) => cartItem.id === item.id);
  }

  function toggle() {
    setCartOpen((prev) => !prev);
  }

  function handleCartQuantity(e, type = "", id = 0) {
    e.stopPropagation();

    const cartCopy = [...cart];

    const matchingItem = cartCopy.find((item) => item.id === id);

    if (!matchingItem) {
      alert("Product Not Found");
      return;
    }

    if (type === "dec" && matchingItem["quantity"] > 1) {
      matchingItem["quantity"] -= 1;
    } else if (type === "inc") {
      matchingItem["quantity"] += 1;
    }

    setCart(cartCopy);
  }

  return (
    <>
      <TotalProducts />
      <Header length={cart.length} cartToggle={toggleModal} />
      <div className="px-2">
        <div className="mb-5"></div>
        <h1 className="mb-3">WELCOME TO STAR BUCKS</h1>
        <ProductsList cart={cart}  handleAddToCart={handleAddToCart} isAddedToCart={isAddedToCart} />
        <CartModal
          isOpen={cartOpen}
          toggle={toggle}
          items={cart}
          quantityChange={handleCartQuantity}
          totalCartPrice={cartTotal}
        />
      </div>
    </>
  );
}

export default App;

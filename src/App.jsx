import { useCallback, useEffect, useReducer, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import CartModal from "./components/Modal/CartModal";
import { appReducer } from "./reducers/AppReducer";

function App() {
  const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    cartValue: 0,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { products, cart, cartOpen, cartValue } = state;
  const [length, setLength] = useState(100000000);
  const val = useMemo(() => calculateValue(length), [length]);
  console.log("Value", val);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          dispatch({ type: "products", value: result.products });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function calculateValue(length = 0) {
    console.log(length);
    return Array.from({ length: length }, (_, index) => index + 1).reduce(
      (a, b) => a + b
    );
  }

  const toggle = useCallback(() => {
    console.log(cartOpen);
    dispatch({
      type: "cartOpen",
      value: !cartOpen,
    });
  }, [cartOpen]);

  function addToCart(e, data = {}) {
    dispatch({
      type: "cart",
      value: {
        ...data,
        quantity: 1,
      },
    });
  }

  function isItemAddedToCart(id) {
    const matchingItem = cart.find((item) => item.id === id);
    if (matchingItem) return true;
    return false;
  }

  function cartItemQuantityChange(e, type, id) {
    e.preventDefault();
    dispatch({
      type: "quantity",
      do: type,
      id,
    });
  }

  return (
    <>
      <Header length={cart.length} cartToggle={toggle} />
      <button
        onClick={() => {
          setLength(length + 1);
        }}
      >
        Increment Value
      </button>
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

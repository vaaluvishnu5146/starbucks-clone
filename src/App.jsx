import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import CartModal from "./components/Modal/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {}, []);

  function toggle() {
    setCartOpen((prev) => !prev);
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
              addToCart={() => {}}
              disabled={() => {}}
            />
          ))}
        </div>
        <CartModal
          isOpen={cartOpen}
          toggle={toggle}
          items={cart}
          quantityChange={() => {}}
          totalCartPrice={0}
        />
      </div>
    </>
  );
}

export default App;

import { useProducts } from "../../context/ProductsContext";
import ListItem from "../ListItem/ListItem";

export default function ProductsList({ handleAddToCart = () => {}, isAddedToCart = () => {}, cart = [] }) {
   const { products = [] } =  useProducts()
  return (
    <div>
              {products.map((p, index) => (
                <ListItem
                  key={`${p.name}-${index}`}
                  data={p}
                  addToCart={handleAddToCart}
                  disabled={isAddedToCart(cart, p)}
                />
              ))}
            </div>
  )
}

ProductsList.propTypes = {
    handleAddToCart: Function,
    isAddedToCart: Function,
    cart: Array
};

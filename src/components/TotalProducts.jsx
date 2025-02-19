import { useProducts } from "../context/ProductsContext"

export default function TotalProducts() {
 const { products = [] } = useProducts();
  return (
    <div>TotalProducts: {products.length}</div>
  )
}

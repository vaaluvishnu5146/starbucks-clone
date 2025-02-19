import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductsContext = createContext({
    products: [],
    handleProductsChange: () => {}
});

export const useProducts = () => useContext(ProductsContext);

export default function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5173/products.json")
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            if (result && result.products) {
              setProducts(result.products);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }, []);


    function handleProductsChange(data = []) {
        setProducts(data);
    }
    
    return <ProductsContext.Provider value={{
        products,
        handleProductsChange
    }}>
    {children}
    </ProductsContext.Provider>;
}

ProductsContextProvider.propTypes = {
    children: React.Component
};
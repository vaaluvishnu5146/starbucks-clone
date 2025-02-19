import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ProductsContextProvider from "./context/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
  </StrictMode>
);

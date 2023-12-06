import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./Context/productcontext";
import { FilterProvider } from "./Context/filter_context";
import { CartProvider } from "./Context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <Router>
            <App />
          </Router>
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>
);

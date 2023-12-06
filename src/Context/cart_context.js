import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ApnaCart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
  };

  // increase and decrease the product
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // clear the cart

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // add the data in localStorage
  useEffect(() => {
    // dispatch({type: "CART_TOTAL_ITEM"});
    // dispatch({type: "CART_TOTAL_PRICR"});
    dispatch({type: "CART_TOTAL"});
    localStorage.setItem("ApnaCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

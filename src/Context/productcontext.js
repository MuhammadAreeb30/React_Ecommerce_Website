import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_PRODUCT", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // second api call

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };

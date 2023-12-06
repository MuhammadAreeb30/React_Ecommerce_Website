import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../Reducer/filterReducer";

const FitlerContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function

  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // clear the filters

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  // sort the proucts

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FitlerContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FitlerContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FitlerContext);
};

export { FilterProvider, useFilterContext };

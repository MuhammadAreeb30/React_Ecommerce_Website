const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
        },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortProduct;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      const tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        // switch (state.sorting_value) {
        //   case "lowest":
        //     return a.price - b.price;
        //     break;
        //   case "highest":
        //     return b.price - a.price;
        //     break;
        //   case "a-z":
        //     return a.name.localeCompare(b.name);
        //     break;
        //   case "z-a":
        //     return b.name.localeCompare(a.name);
        //     break;
        //   default:
        //     return state;
        //     break;
        // }

        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortProduct = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortProduct,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

      case "CLEAR_FILTERS":
        return {
          ...state,
          filters: {
            ...state.filters,
            text: "",
            category: "All",
            company: "All",
            color: "All",
            maxPrice: 0,
            price: state.filters.maxPrice,
            minPrice: state.filters.maxPrice,
          },
        };

    default:
      return state;
  }
};

export default filterReducer;

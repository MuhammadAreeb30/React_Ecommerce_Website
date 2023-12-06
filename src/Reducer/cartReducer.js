// import React from "react";
// import { act } from "react-dom/test-utils";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // existing products

    let existingProducts = state.cart.find((curElem) => {
      return curElem.id === id + color;
    });

    if (existingProducts) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        max: product.stock,
        image: product.image[0].url,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // set the increase and decrease

  if (action.type === "SET_DECREASE") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (curElem.amount >= curElem.max) {
          curElem.amount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // remove the item

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curElem) => {
      return curElem.id !== action.payload;
    });
    return {
      ...state,
      cart: [...updatedCart],
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "CART_TOTAL_ITEM") {
  //   let cartItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;
  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: cartItemVal,
  //   };
  // }

  // if (action.type === "CART_TOTAL_PRICR") {
  //   let totalPrice = state.cart.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;
  //     initialVal = initialVal + price * amount;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_price: totalPrice,
  //   };
  // }

  if (action.type === "CART_TOTAL") {
    let { total_price, total_item } = state.cart.reduce(
      (initialVal, curElem) => {
        let { price, amount } = curElem;
        initialVal.total_item += amount;
        initialVal.total_price += price * amount;

        return initialVal;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_price,
      total_item,
    };
  }

  return state;
};

export default cartReducer;

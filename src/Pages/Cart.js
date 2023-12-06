import React from "react";
import { useCartContext } from "../Context/cart_context";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helper/PriceFormat";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="no-cart-itme">
        <h3>No Cart In Item</h3>
      </div>
    );
  }

  return (
    <section className="cart-sec">
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/products">
            <button className="btn">continue shopping</button>
          </NavLink>
          <button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </button>
        </div>

        {/* order total amount */}
        <div className="order-total-amount">
          <div className="order-total-subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <PriceFormat price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <PriceFormat price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <PriceFormat price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

import React from "react";
import PriceFormat from "../helper/PriceFormat";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cart_context";

const CartItem = ({ id, name, color, image, price, amount }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image-name">
        <div>
          <img src={image} alt={id} />
        </div>

        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        <p>
          <PriceFormat price={price} />
        </p>
      </div>
      {/* Quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
      {/* Subtotal */}
      <div className="cart-hide">
        <p>
          <PriceFormat price={price * amount} />
        </p>
      </div>
      {/* remove btn */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;

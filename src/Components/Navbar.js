import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../Context/cart_context";

const Navbar = () => {
  const { total_item } = useCartContext();

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#8490ff" : "#212529",
    };
  };

  const [menuIcon, setMenuIcon] = useState();

  return (
    <nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              style={navLinkStyles}
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              style={navLinkStyles}
              onClick={() => setMenuIcon(false)}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              style={navLinkStyles}
              onClick={() => setMenuIcon(false)}
            >
              products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              style={navLinkStyles}
              onClick={() => setMenuIcon(false)}
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley-link"
              style={navLinkStyles}
              onClick={() => setMenuIcon(false)}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total-item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
        {/* menu & close button */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

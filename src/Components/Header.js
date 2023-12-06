import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <img src="./images/logo.png" alt="My Logo" className="logo" />
        </NavLink>
        <Navbar />
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <section className="pageNavigation-section">
      <NavLink to="/">Home</NavLink>/{title}
    </section>
  );
};

export default PageNavigation;

import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="GridView-Sec">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};

export default GridView;

import React from "react";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helper/PriceFormat";

const Product = (curElem) => {
  const { id, name, image, category, price } = curElem;

  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data-price">{<PriceFormat price={price} />}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Product;

import React from "react";
import { NavLink } from "react-router-dom";
import PriceFormat from "../helper/PriceFormat";

const ListView = ({ products }) => {
  return (
    <section className="list-view-sec">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card grid grid-two-column" key={id}>
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <PriceFormat price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button className="btn">read more</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListView;

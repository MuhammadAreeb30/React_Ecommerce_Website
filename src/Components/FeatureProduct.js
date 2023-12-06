import React from "react";
import { useProductContext } from "../Context/productcontext";
import { ThreeDots } from "react-loader-spinner";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="loading">
        <ThreeDots color="#6254f3" />
      </div>
    );
  }

  return (
    <>
      <section className="feature-section">
        <div className="container">
          <div className="intro-data">Check Now!</div>
          <div className="common-heading">Our Feature Services</div>
          <div className="grid grid-three-column">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;

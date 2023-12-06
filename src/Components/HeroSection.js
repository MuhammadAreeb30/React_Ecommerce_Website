import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({myData}) => {

const {name} = myData;

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to</p>
              <h1>{name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias atque temporibus veniam doloribus libero ad error
                omnis voluptates animi! Suscipit sapiente.
              </p>
              <NavLink to="/products">
                <button className="btn">shop now</button>
              </NavLink>
            </div>
            {/* our hemePage image */}
            <div className="hero-section-image">
              <figure>
                <img
                  src="./images/hero-img.jpg"
                  className="img-style"
                  alt="HomePage Image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

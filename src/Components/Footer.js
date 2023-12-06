import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="contact-short-headings">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="/contact">
              <button className="btn">get started</button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-three-column">
          <div className="footer-about">
            <h3>Areeb Developer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div className="social-icon">
                <FaFacebookF className="icons" />
              </div>
              <div className="social-icon">
                <FaInstagram className="icons" />
              </div>
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/muhammad-areeb-09aa1126a/"
                  target="_blank"
                >
                  <FaLinkedinIn className="icons" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom section */}

        <div className="footer-bottom-section">
          <hr />
          <div className="footer-bottom">
            <p>@{new Date().getFullYear()} Areeb Developer. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/productcontext";
import { ThreeDots } from "react-loader-spinner";
import PageNavigation from "../Components/PageNavigation";
import ProductImage from "../Components/ProductImage";
import PriceFormat from "../helper/PriceFormat";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "../Components/Star";
import AddToCart from "../Components/AddToCart";

const API_URL = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } =
    useProductContext();

  const { id } = useParams();

  const {
    id: productID,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API_URL}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="loading">
        <ThreeDots color="#6254f3" />
      </div>
    );
  }

  return (
    <>
      <PageNavigation title={name} />
      <section className="single-product-section">
        <div className="container">
          <div className="grid grid-two-column">
            {/* Product Image */}
            <div className="product_images">
              <ProductImage imgs={image} />
            </div>
            {/* Product Data */}
            <div className="product-data">
              <h2>{name}</h2>
              <Star stars={stars} reviews={reviews} />
              <p className="product-data-price">
                MRP:
                <del>
                  <PriceFormat price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <PriceFormat price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>Delivered</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty</p>
                </div>
              </div>
              <div className="product-data-info">
                <p>
                  Available:{" "}
                  <span> {stock > 0 ? "In Stock" : "Not Availabe"}</span>
                </p>
                <p>
                  Brand: <span>{company}</span>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;

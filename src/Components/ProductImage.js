import React, { useState } from "react";

const ProductImage = ({ imgs = [{ url: "" }] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);


  if (!Array.isArray(imgs) || imgs.length === 0) {
    console.error("Image array nahi hai ya khali hai");
    return null;
  }

  return (
    <>
      <section className="product-image-section">
        <div className="grid grid-four-column">
          {imgs.map((curElem, index) => {
            return (  
                <img
                  src={curElem.url}
                  alt={curElem.filename}
                  className="box-image-style"
                  key={index}
                  onClick={() => setMainImage(curElem)}
                />
            );
          })}
        </div>
        {/* scond image */}
        <div className="main-screen">
          <img src={mainImage.url} alt={mainImage.filename} />
        </div>
      </section>
    </>
  );
};

export default ProductImage;

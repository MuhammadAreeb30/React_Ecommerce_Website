import React from "react";
import ReactStars from "react-stars";

const Star = ({ stars, reviews }) => {
  return (
    <>
      <div className="icon-style">
        <ReactStars
          value={4.5}
          size={25}
          half={true}
          edit={false}
          color1="#F6F8FA"
        />
        <p>{reviews} customer reviews</p>
      </div>
    </>
  );
};

export default Star;

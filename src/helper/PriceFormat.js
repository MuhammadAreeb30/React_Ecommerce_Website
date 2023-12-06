import React from "react";

const PriceFormat = ({ price }) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price / 500);
};

export default PriceFormat;

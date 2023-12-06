import React from "react";
import { useFilterContext } from "../Context/filter_context";
import { FaCheck } from "react-icons/fa";
import PriceFormat from "../helper/PriceFormat";

const FilterSection = () => {
  const {
    updateFilterValue,
    all_products,
    clearFilters,
    filters: { text, color, price, maxPrice, minPrice },
  } = useFilterContext();

  // get unique Data
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      // return (newValue = ["All", ...new Set([].concat(...newValue))]);
      newValue = newValue.flat();
    }
    return (newValue = ["All", ...new Set(newValue)]);
  };

  // uniqui data
  const categoryData = getUniqueData(all_products, "category");
  const camponyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <section className="filter-sec">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="SEARCH"
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                type="button"
                name="category"
                key={index}
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="compnay"
            id="company"
            className="filter-company-select"
            onClick={updateFilterValue}
          >
            {camponyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className="color-all-style"
                  onClick={updateFilterValue}
                >
                  All
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <PriceFormat price={price} />
        </p>
        <input
          type="range"
          name="price"
          max={maxPrice}
          min={minPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>Clear Filters</button>
      </div>
    </section>
  );
};

export default FilterSection;

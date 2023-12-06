import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/filter_context";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();

  return (
    <section className="sort-section">
      {/* 1st column */}
      <div className="sorting-list-grid">
        <button
          className={grid_view ? "sort-active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="sort-icon" />
        </button>
        <button
          className={!grid_view ? "sort-active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="sort-icon" />
        </button>
      </div>
      {/* 2nd column */}
      <div className="product-data">
        <p>{`${filter_products.length} Total Products`} </p>
      </div>
      {/* 3rd column */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort">
            <select
              name="sort"
              id="sort"
              onClick={sorting}
              className="sort-selection-style"
            >
              <option value="lowest">Price(lowest)</option>
              <option value="highest" selected>
                Price(highest)
              </option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Sort;

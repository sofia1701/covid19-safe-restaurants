/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "../styles/search.css";

export default function Search() {
  return (
    <div className="search-wrapper">
      <div className="search-info">
        <h2>Search for a safe restaurant in Manchester</h2>
        <h4>Pick the criteria that best suits you...</h4>

        <form className="search-box">
          <input
            className="search"
            type="text"
            placeholder="Enter your postcode..."
          />
          <button type="button">Search</button>
        </form>

        <div className="criteria">
          <label>
            Deliver
            <input name="checkbox" type="checkbox" />
          </label>
          <label>
            Outside Area
            <input name="checkbox" type="checkbox" />
          </label>
          <label>
            Eat Out To Help Out
            <input name="checkbox" type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}

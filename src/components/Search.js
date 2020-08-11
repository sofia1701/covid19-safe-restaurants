/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/search.css";
import userContext from "../context/userContext";

export default function Search() {
  const { query, setQuery } = useContext(userContext);

  return (
    <div className="search-wrapper">
      <div className="search-info">
        <h2>Search for a safe restaurant in Manchester</h2>

        <form className="search-box">
          <button className="search-button" type="submit">
            <FaSearch />
          </button>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            type="text"
            placeholder="The Bay Horse Tavern..."
          />
        </form>
        <h3>Or select your favourite cuisine</h3>

        <div className="row">
          <Link to="/">All Restaurants</Link>
          <Link to={`/?query={"type": "African"}`}>African</Link>
          <Link to={`/?query={"type": "Asian"}`}>Asian</Link>
          <Link to={`/?query={"type": "American"}`}>American</Link>
          <Link to={`/?query={"type": "British"}`}>British</Link>
          <Link to={`/?query={"type": "Mexican"}`}>Mexican</Link>
          <Link to={`/?query={"type": "Bakery"}`}>Bakery</Link>
        </div>
        <div className="row">
          <Link to={`/?query={"type": "Brazilian"}`}>Brazilian</Link>
          <Link to={`/?query={"type": "Italian"}`}>Italian</Link>
          <Link to={`/?query={"type": "Spanish"}`}>Spanish</Link>
          <Link to={`/?query={"type": "French"}`}>French</Link>
          <Link to={`/?query={"type": "Irish"}`}>Irish</Link>
          <Link to={`/?query={"type": "Vegan"}`}>Vegan</Link>
          <Link to={`/?query={"type": "International"}`}>International</Link>
          <Link to={`/?query={"type": "Cafe"}`}>Cafe</Link>
        </div>
      </div>
    </div>
  );
}

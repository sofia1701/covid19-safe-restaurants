import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <Search />
      <SearchResults />
    </div>
  );
}

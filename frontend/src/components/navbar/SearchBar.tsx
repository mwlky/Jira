import React from "react";

import "../../styles/boardSearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container-navbar">
      <img src="/images/search-icon.svg" className="search-icon" alt="" />
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  );
};

export default SearchBar;

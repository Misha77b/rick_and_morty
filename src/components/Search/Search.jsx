import React, { useEffect, useState } from "react";
import SearchIcon from "./icon/SearchIcon";
import "./Search.scss";

const Search = ({ value, change }) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        className="search__input"
        onChange={change}
        type="text"
        name="search-input"
        value={value}
        aria-labelledby="label-fname"
      />
      <label className="search__label" htmlFor="search-input" id="label-fname">
        <div className="search__label-text">Filter by name</div>
      </label>
    </div>
  );
};

export default Search;

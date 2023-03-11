import React from 'react';
import SearchIcon from './icon/SearchIcon';
import "./Search.scss"

const Search = () => {
  return (
    // <div class="search">
    //   <button type="submit" class="search__button">
    //     <i class="fa-solid fa-magnifying-glass"></i>
    //   </button>
    //   <input type="text" class="search__imput" placeholder="What are you looking for?" />
    // </div>
    <div className="search">
      <SearchIcon />
      <input
        className="search__input"
        type="text"
        name='search-input'
        value=""
        aria-labelledby="label-fname"
      />
      <label className="search__label" htmlFor="search-input" id="label-fname">
        <div className="search__label-text">Filter by name</div>
      </label>
    </div>
  )
}

export default Search
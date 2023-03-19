import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useLocationParams from "../../hooks/useLocationParams";
import { fetchCharacters, fetchFiletredCharacters } from "../../store/reducers/charactersSlice";
import SearchIcon from "./icon/SearchIcon";
import "./Search.scss";

const Search = ({value, change}) => {
  // const dispatch = useDispatch();
  // const [value, setValue] = useState("");
  // const [search, setSearch] = useSearchParams();
  // const { params } = useLocationParams({ name: value })
  // console.log(search);
  // console.log("params", params);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   console.log(e.target.value);

  //   if (e.target.value < 1) {
  //     search.delete("name");
  //     setSearch(search);
  //   } else {
  //     search.set("name", e.target.value);
  //     setSearch(search);
  //   }
  //   // const filters = {
  //   //   name: search.get("name"),
  //   // }
  //   // log
  //   // dispatch(fetchCharacters(params));
  //   dispatch(fetchFiletredCharacters({filters: params}))
  // };

  // useEffect(() => {
  //   if (search.length > 0) {
  //     setValue(search);
  //   }
  // }, [value, search]);

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

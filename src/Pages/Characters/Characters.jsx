import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Characters.scss";
import Logo from "../../components/Logo/Logo";
import useLocationParams from "../../hooks/useLocationParams";
import { useSearchParams, useParams } from "react-router-dom";
import Search from "../../components/Search/Search";

import Card from "../../components/Card/Card";
import { fetchCharacters } from "../../store/reducers/charactersSlice";
import Loader from "../../components/Loader/Loader";
import PaginationNav from "../../components/PaginationNav/PaginationNav";

const Characters = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const searchValue = search.get("name");

  // filters
  const [value, setValue] = useState("");
  const currentPage = search.get("page");
  
  // selectors
  const loading = useSelector((state) => state.charactersReducer.loader);
  const charactersInfo = useSelector((state) => state.charactersReducer.charactersInfo);
  const charactersResults = useSelector((state) => state.charactersReducer.charactersResults);

  const handleChange = (e) => {
    setValue(e.target.value);
    search.delete("page");

    if (e.target.value < 1) {
      search.delete("name");
      setSearch(search);
    } else {
      search.set("name", e.target.value);
      setSearch(search);
    }
  };


  useEffect(() => {
    if (currentPage === null) {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    } else {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    }
  }, [currentPage]);

  useEffect(() => {
    if (searchValue) {
      setValue(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    if (value.length < 1) {
      setCanRender(() => false);
      dispatch(fetchCharacters({ params }));
    } else {
      dispatch(fetchCharacters({ params }));
    }
  }, [pageNumber, value, params]);

  useEffect(() => {
    if (!loading && canRender === false) {
      setCanRender(() => true);
    }
  }, [loading]);

  return (
    <>
      {!canRender ? (
        <Loader />
      ) : (
        <div className="characters">
          <Logo />
          <Search value={value} change={handleChange} />
          <div className="cards-container">
            {charactersResults.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  species={item.species}
                />
              );
            })}
          </div>
          <PaginationNav
            totalPages={charactersInfo.pages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      )}
    </>
  );
};

export default Characters;

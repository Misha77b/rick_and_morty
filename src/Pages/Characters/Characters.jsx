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
// import { fetchFiletredCharacters } from "../../store/reducers/filteredCharactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  // const [characters, setCharacters ] = useState([]);
  // pagination
  const [canRender, setCanRender] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const { pageNumber: page } = useParams();
  // console.log("characters", characters);

  // filters
  const [value, setValue] = useState("");
  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams({ name: value });
  // console.log("search", search);
  // console.log("params", params);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);

    if (e.target.value < 1) {
      search.delete("name");
      setSearch(search);
    } else {
      search.set("name", e.target.value);
      setSearch(search);
    }
    // const filters = {
    //   name: search.get("name"),
    // }
    // log
    // dispatch(fetchCharacters(params));
    // dispatch(fetchFiletredCharacters({filters: params}))
  };

  const loading = useSelector((state) => state.charactersReducer.loader);
  const charactersInfo = useSelector((state) => state.charactersReducer.charactersInfo);
  const charactersResults = useSelector((state) => state.charactersReducer.charactersResults);
  // const filteredCharactersInfo = useSelector((state) => state.filteredCharactersReducer.filteredCharactersInfo);
  // console.log("filteredCharactersInfo", filteredCharactersInfo);

  // console.log(charactersInfo);
  // console.log(charactersResults);

  useEffect(() => {
    if (page === undefined) {
      setPageNumber(page ? parseInt(page) : 1);
    } else {
      setPageNumber(page ? parseInt(page.split("=").slice(1)[0]) : 1);
    }
  }, [page]);

  useEffect(() => {
    if(value.length < 1) {
      setCanRender(() => false);
      dispatch(fetchCharacters({pageNumber, filters: ""}))
    } else {
      dispatch(fetchCharacters({pageNumber, filters: params}))
    //   console.log(pageNumber, `name=${search.get("name")}`);
    //   dispatch(fetchFiletredCharacters({pageNumber, filters: `name=${search.get("name")}`})).then((res) => {
    //     setCharacters(res.payload.results);
    //   });;
    }
  }, [page, pageNumber, value, params]);

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
            // totalPages={value.length < 1 ? charactersInfo.pages : filteredCharactersInfo.pages}
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

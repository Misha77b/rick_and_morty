import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Characters.scss";
import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";

import Card from "../../components/Card/Card";
import { fetchCharacters } from "../../store/reducers/charactersSlice";
import Loader from "../../components/Loader/Loader";
import PaginationNav from "../../components/PaginationNav/PaginationNav";
import { useParams } from "react-router-dom";

const Characters = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const { pageNumber: page } = useParams();
  console.log(page);

  const loading = useSelector((state) => state.charactersReducer.loader);
  const charactersInfo = useSelector(
    (state) => state.charactersReducer.charactersInfo
  );
  const charactersResults = useSelector(
    (state) => state.charactersReducer.charactersResults
  );

  console.log(charactersInfo);
  console.log(charactersResults);

  useEffect(() => {
    if (page === undefined) {
      setPageNumber(page ? parseInt(page) : 1);
    } else {
      setPageNumber(page ? parseInt(page.split("=").slice(1)[0]) : 1);
    }
  }, [page]);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchCharacters(pageNumber));
  }, [pageNumber]);

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
          <Search />
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

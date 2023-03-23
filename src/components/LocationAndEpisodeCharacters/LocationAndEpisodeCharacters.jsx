import React, { useState, useEffect } from "react";
import "./LocationAndEpisodeCharacters.scss";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination/Pagination";
import PaginationNav from "../PaginationNav/PaginationNav";

const LocationAndEpisodeCharacters = ({ characters }) => {
  const [search, setSearch] = useSearchParams();
  const [currentpage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(20);
  const indexOfLastCharacter = currentpage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const totalPages = [];
  const paramsPage = search.get("page");
  for (let i = 1; i <= Math.ceil(characters.length / charactersPerPage); i++) {
    totalPages.push(i);
  }

  useEffect(() => {
    if (paramsPage === null) {
      setCurrentPage(paramsPage ? parseInt(paramsPage) : 1);
    } else {
      setCurrentPage(paramsPage ? parseInt(paramsPage) : 1);
    }
  }, [paramsPage]);

  return (
    <>
      {characters.length < 1 && (
        <span className="characters_empty">No characters</span>
      )}
      <div className="locationCards-container">
        {Array.isArray(characters) ? (
          <Pagination
            characters={characters.slice(
              indexOfFirstCharacter,
              indexOfLastCharacter
            )}
          />
        ) : (
          <Pagination characters={characters} />
        )}
      </div>
      {!characters.length < 1 && (
        <PaginationNav
          totalPages={parseInt(totalPages.slice(-1))}
          pageNumber={currentpage}
          setPageNumber={setCurrentPage}
        />
      )}
    </>
  );
};

export default LocationAndEpisodeCharacters;

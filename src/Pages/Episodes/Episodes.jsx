import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import "./Episodes.scss";
import useLocationParams from "../../hooks/useLocationParams";
import { useSearchParams } from "react-router-dom";
import PaginationNav from "../../components/PaginationNav/PaginationNav";
import LocationAndEpisodeCard from "../../components/LocationAndEpisodeCard/LocationAndEpisodeCard";
import { fetchEpisodes } from "../../store/reducers/episodesSlice";

const Episodes = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const currentPage = search.get("page");

  const loading = useSelector((state) => state.episodesReducer.loader);
  const episodesInfo = useSelector((state) => state.episodesReducer.episodesInfo);
  const episodesResults = useSelector((state) => state.episodesReducer.episodesResults);

  useEffect(() => {
    if (currentPage === null) {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    } else {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    }
  }, [currentPage]);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchEpisodes({ params }));
  }, [pageNumber, params]);

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
        <div className="episodes">
          <span className="episodes__title">Episodes</span>
          <div className="episodesCards-container">
            {episodesResults.map((item) => {
              return (
                <LocationAndEpisodeCard
                  page={"episode"}
                  key={item.id}
                  id={item.id}
                  image={"./assets/episode.jpg"}
                  name={item.name}
                  type={item.type}
                />
              );
            })}
          </div>
          <PaginationNav
            totalPages={episodesInfo.pages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      )}
    </>
  );
};

export default Episodes;

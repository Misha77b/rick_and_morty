import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import "./Locations.scss";
import useLocationParams from "../../hooks/useLocationParams";
import { useSearchParams } from "react-router-dom";
import PaginationNav from "../../components/PaginationNav/PaginationNav";
import LocationAndEpisodeCard from "../../components/LocationAndEpisodeCard/LocationAndEpisodeCard";
import { fetchLocations } from "../../store/reducers/locationSlice";

const Locations = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();

  // pagination
  const [pageNumber, setPageNumber] = useState(1);
  const currentPage = search.get("page");

  const loading = useSelector((state) => state.locationReducer.loader);
  const locationsInfo = useSelector((state) => state.locationReducer.locationsInfo);
  const locationsResults = useSelector((state) => state.locationReducer.locationsResults);

  useEffect(() => {
    if (currentPage === null) {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    } else {
      setPageNumber(currentPage ? parseInt(currentPage) : 1);
    }
  }, [currentPage]);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchLocations({ params }));
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
        <div className="locations">
          <span className="locations__title">Locations</span>
          <div className="locationCards-container">
            {locationsResults.map((item) => {
              return (
                <LocationAndEpisodeCard
                  page={"location"}
                  key={item.id}
                  id={item.id}
                  image={"./assets/location.jpg"}
                  name={item.name}
                  type={item.type}
                />
              );
            })}
          </div>
          <PaginationNav
            totalPages={locationsInfo.pages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      )}
    </>
  );
};

export default Locations;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./LocationInfo.scss";
import {
  fetchLocation,
  fetchLocationCharacters,
  setLocationResidents,
} from "../../store/reducers/singleLocationSlice";
import { locationAndEpisodeBtnStyle } from "../../components/GoBackBtn/GoBackStyles/style";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import LocationAndEpisodeCharacters from "../../components/LocationAndEpisodeCharacters/LocationAndEpisodeCharacters";

const LocationInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canRender, setCanRender] = useState(undefined);
  const { id } = useParams();
  const charactersId = [];

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/locations");
  };

  const loading = useSelector((state) => state.singleLocationReducer.loader);
  const locationInfo = useSelector((state) => state.singleLocationReducer.locationInfo);
  const locationResidents = useSelector((state) => state.singleLocationReducer.locationResidents);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchLocation(id))
      .then((res) => {
        res.payload.residents.forEach((item) => {
          charactersId.push(item.split("/").slice(-1).toString());
          charactersId.toString();
        });
        return res.payload;
      })
      .then((data) => {
        if (data.residents.length < 1) {
          dispatch(setLocationResidents([]));
          return data;
        } else {
          dispatch(fetchLocationCharacters(charactersId));
        }
      });
  }, []);

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
        <div className="location-info">
          <GoBackBtn
            btnStyle={locationAndEpisodeBtnStyle}
            goBack={handleGoBack}
          />
          {locationResidents.length ? (
            <div className="location-description">
              <span className="location-description__name">
                Location: {locationInfo.name}
              </span>
              <span className="location-description__dimesion">
                {locationInfo.dimension === "unknown"
                  ? `Dimesion: ${locationInfo.dimension}`
                  : locationInfo.dimension}
              </span>
            </div>
          ) : null}
          <LocationAndEpisodeCharacters characters={locationResidents} />
        </div>
      )}
    </>
  );
};

export default LocationInfo;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./EpisodeInfo.scss";
import {
  fetchEpisode,
  fetchEpisodeCharacters,
  setEpisodeCharacters,
} from "../../store/reducers/singleEpisodeSlice";
import { locationAndEpisodeBtnStyle } from "../../components/GoBackBtn/GoBackStyles/style";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import LocationAndEpisodeCharacters from "../../components/LocationAndEpisodeCharacters/LocationAndEpisodeCharacters";

const EpisodeInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canRender, setCanRender] = useState(undefined);
  const { id } = useParams();
  const charactersId = [];

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/episodes");
  };

  const loading = useSelector((state) => state.singleEpisodeReducer.loader);
  const episodeInfo = useSelector(
    (state) => state.singleEpisodeReducer.episodeInfo
  );
  const episodeCharacters = useSelector(
    (state) => state.singleEpisodeReducer.episodeCharacters
  );

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchEpisode(id))
      .then((res) => {
        res.payload.characters.forEach((item) => {
          charactersId.push(item.split("/").slice(-1).toString());
          charactersId.toString();
        });
        return res.payload;
      })
      .then((data) => {
        if (data.characters.length < 1) {
          dispatch(setEpisodeCharacters([]));
          return data;
        } else {
          dispatch(fetchEpisodeCharacters(charactersId));
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
          {episodeCharacters.length ? (
            <div className="location-description">
              <span className="location-description__name">
                Episode: {episodeInfo.name}
              </span>
              <span className="location-description__dimesion">
                {episodeInfo.episode}
              </span>
            </div>
          ) : null}
          <LocationAndEpisodeCharacters characters={episodeCharacters} />
        </div>
      )}
    </>
  );
};

export default EpisodeInfo;

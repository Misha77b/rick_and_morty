import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../components/store/reducers/episodesSlice";
import "./Episodes.scss";

const Episodes = () => {
  const dispatch = useDispatch();
  const episodesInfo = useSelector((state) => state.episodesReducer.episodesInfo);
  const episodesResults = useSelector((state) => state.episodesReducer.episodesResults);

  console.log(episodesInfo);
  console.log(episodesResults);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, []);

  return <div>Episodes</div>;
};

export default Episodes;

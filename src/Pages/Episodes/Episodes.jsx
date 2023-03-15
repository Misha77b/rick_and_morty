import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../store/reducers/episodesSlice";
import Loader from "../../components/Loader/Loader";
import "./Episodes.scss";

const Episodes = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);

  const loading = useSelector((state) => state.episodesReducer.loader);
  const episodesInfo = useSelector((state) => state.episodesReducer.episodesInfo);
  const episodesResults = useSelector((state) => state.episodesReducer.episodesResults);

  console.log(episodesInfo);
  console.log(episodesResults);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchEpisodes());
  }, []);

  useEffect(() => {
    if (!loading && canRender === false) {
			setCanRender(() => true);
		}
  }, [loading]);

  return (
    <>
      {!canRender ? <Loader /> : <>
        <div>Episodes</div>
      </>}
    </>
  );
};

export default Episodes;

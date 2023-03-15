import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../store/reducers/locationSlice";
import Loader from "../../components/Loader/Loader";
import "./Location.scss";

const Location = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);

  const loading = useSelector((state) => state.locationReducer.loader);
  const locationsInfo = useSelector((state) => state.locationReducer.locationsInfo);
  const locationsResults = useSelector((state) => state.locationReducer.locationsResults);

  console.log("info", locationsInfo);
  console.log("results", locationsResults);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchLocations());
  }, []);

  useEffect(() => {
    if (!loading && canRender === false) {
			setCanRender(() => true);
		}
  }, [loading]);

  return (
    <>
      {!canRender ? <Loader /> : <>
        <div>Location</div>
      </>}
    </>
  );
};

export default Location;

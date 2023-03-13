import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../store/reducers/locationSlice";
import "./Location.scss";

const Location = () => {
  const dispatch = useDispatch();
  const locationsInfo = useSelector((state) => state.locationReducer.locationsInfo);
  const locationsResults = useSelector((state) => state.locationReducer.locationsResults);

  console.log("info", locationsInfo);
  console.log("results", locationsResults);

  useEffect(() => {
    dispatch(fetchLocations());
  }, []);

  return <div>Location</div>;
};

export default Location;

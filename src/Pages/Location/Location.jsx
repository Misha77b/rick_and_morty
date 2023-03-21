import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import "./Location.scss";
import Card from "../../components/Card/Card";
import {
  fetchLocations,
  fetchLocationsCharacters,
} from "../../store/reducers/locationSlice";

const Location = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const [location, setLocation] = useState(1);
  const charactersId = [];

  const loading = useSelector((state) => state.locationReducer.loader);
  //   const locationsInfo = useSelector((state) => state.locationReducer.locationsInfo);
  const locationsResults = useSelector((state) => state.locationReducer.locationsResults);
  const locationCharacters = useSelector((state) => state.locationReducer.locationCharacters);

  //   console.log("info", locationsInfo);
  //   console.log("results", locationsResults);
  console.log("locationCharacters", locationCharacters);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchLocations(location))
      //   .then((res) => res.payload.residents)
      //   .then((data) =>
      //   data.forEach((item) => {
      //       // let str = ''
      //       //   console.log(item.split("/").slice(-1).toString());
      //       charactersId.push(item.split("/").slice(-1).toString())
      //       // dispatch(fetchLocationsCharacters(item))
      //       console.log(charactersId.toString());
      //     })
      //     );
      .then((res) =>
        res.payload.residents.forEach((item) => {
          // let str = ''
          //   console.log(item.split("/").slice(-1).toString());
          charactersId.push(item.split("/").slice(-1).toString());
          // dispatch(fetchLocationsCharacters(item))
          console.log(charactersId.toString());
        })
      )
      .then((data) => dispatch(fetchLocationsCharacters(charactersId)))
    // dispatch(fetchLocationsCharacters(charactersId));
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
        <div className="locations">
          <div>Location</div>
          <div className="locationCards-container">
            {locationCharacters.map((item) => {
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
        </div>
      )}
    </>
  );
};

export default Location;

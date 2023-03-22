import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./LocationInfo.scss";
import Card from "../../components/Card/Card";
import {
  fetchLocation,
  fetchLocationCharacters,
} from "../../store/reducers/singleLocationSlice";

const LocationInfo = () => {
  const dispatch = useDispatch();
  const [canRender, setCanRender] = useState(undefined);
  const { id } = useParams();
  //   const [location, setLocation] = useState(1);
  const charactersId = [];

  const loading = useSelector((state) => state.singleLocationReducer.loader);
  const locationInfo = useSelector(
    (state) => state.singleLocationReducer.locationInfo
  );
  const locationResidents = useSelector(
    (state) => state.singleLocationReducer.locationResidents
  );

  //   console.log("results", locationInfo);
  //   console.log("locationCharacters", locationResidents);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchLocation(id))
      .then((res) => {
        res.payload.residents.forEach((item) => {
          // let str = ''
          //   console.log(item.split("/").slice(-1).toString());
          charactersId.push(item.split("/").slice(-1).toString());
          // dispatch(fetchLocationsCharacters(item))
          charactersId.toString();
        });
        return res.payload;
      })

      .then((data) => {
        dispatch(fetchLocationCharacters(charactersId));
      });
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
    //   )
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
            {locationResidents.map((item) => {
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

export default LocationInfo;

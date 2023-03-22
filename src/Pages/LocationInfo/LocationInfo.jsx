import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./LocationInfo.scss";
import Card from "../../components/Card/Card";
import {
  fetchLocation,
  fetchLocationCharacters,
  setLocationResidents,
} from "../../store/reducers/singleLocationSlice";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

const LocationInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canRender, setCanRender] = useState(undefined);
  const { id } = useParams();
  //   const [location, setLocation] = useState(1);
  const charactersId = [];
  //   console.log("charactersId", charactersId);

  const loading = useSelector((state) => state.singleLocationReducer.loader);
  const locationInfo = useSelector(
    (state) => state.singleLocationReducer.locationInfo
  );
  const locationResidents = useSelector(
    (state) => state.singleLocationReducer.locationResidents
  );

  //   console.log("results", locationInfo);
  // console.log("locationCharacters", locationResidents);

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

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
        if (!charactersId.length) {
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

  console.log(Array.isArray(locationResidents));

  return (
    <>
      {!canRender ? (
        <Loader />
      ) : (
        <div className="locations">
          <div>Location</div>
          <GoBackBtn goBack={handleGoBack} />
          <div className="locationCards-container">
            {!locationResidents.length && <span>No characters</span>}
            {Array.isArray(locationResidents) ? (
              locationResidents.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    species={item.species}
                  />
                );
              })
            ) : (
              <Card
                key={locationResidents.id}
                id={locationResidents.id}
                image={locationResidents.image}
                name={locationResidents.name}
                species={locationResidents.species}
              />
            )}
            {/* {locationResidents.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  species={item.species}
                />
              );
            })} */}
          </div>
        </div>
      )}
    </>
  );
};

export default LocationInfo;

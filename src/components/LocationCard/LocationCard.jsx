import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LocationCard.scss";

const LocationCard = ({ id, name, type }) => {
  return (
    <Link to={`/location/${id}`}>
      <div className="location-card">
        <img
          className="location-card__img"
          src="./assets/universe.jpg"
          alt="location img"
        />
        <div className="location-card-text-content">
          <h3 className="location-card-text-content__location">
            Location {id}
          </h3>
          <span className="location-card-text-content__title">{name}</span>
          <br />
          <span className="location-card-text-content__subtitle">{type}</span>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;

LocationCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
};

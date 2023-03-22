import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LocationAndEpisodeCard.scss";

const LocationAndEpisodeCard = ({ id, name, type }) => {
  return (
    <Link to={`/location/${id}`}>
      <div className="LocationAndEpisode-card">
        <img
          className="LocationAndEpisode-card__img"
          src="./assets/universe.jpg"
          alt="location img"
        />
        <div className="LocationAndEpisode-card-text-content">
          <h3 className="LocationAndEpisode-card-text-content__location">
            Location {id}
          </h3>
          <span className="LocationAndEpisode-card-text-content__title">{name}</span>
          <br />
          <span className="LocationAndEpisode-card-text-content__subtitle">{type}</span>
        </div>
      </div>
    </Link>
  );
};

export default LocationAndEpisodeCard;

LocationAndEpisodeCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
};

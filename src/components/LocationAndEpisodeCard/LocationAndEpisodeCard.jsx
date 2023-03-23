import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LocationAndEpisodeCard.scss";

const LocationAndEpisodeCard = ({ page, id, image, name, type }) => {
  return (
    <Link to={`/${page}/${id}`}>
      <div className="LocationAndEpisode-card">
        <img
          className="LocationAndEpisode-card__img"
          src={image}
          alt="location img"
        />
        <div className="LocationAndEpisode-card-text-content">
          <h3 className="LocationAndEpisode-card-text-content__page">
            {page} {id}
          </h3>
          <span className="LocationAndEpisode-card-text-content__title">
            {name}
          </span>
          <br />
          <span className="LocationAndEpisode-card-text-content__subtitle">
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LocationAndEpisodeCard;

LocationAndEpisodeCard.propTypes = {
  page: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

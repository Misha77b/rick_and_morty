import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, image, name, species }) => {
  return (
    <Link to={`/character/${id}`}>
      <div className="card">
        <img className="card__img" src={image} alt="character img" />
        <div className="card-text-content">
          <span className="card-text-content__title">{name}</span> <br />
          <span className="card-text-content__subtitle">{species}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

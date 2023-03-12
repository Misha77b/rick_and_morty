import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ image, name, species }) => {
  return (
    <>
      <div className="card">
        <img className="card__img" src={image} alt="character img" />
        <div className="card-text-content">
          <span className="card-text-content__title">{name}</span> <br />
          <span className="card-text-content__subtitle">{species}</span>
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};
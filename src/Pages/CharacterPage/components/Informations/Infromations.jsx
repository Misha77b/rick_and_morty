import React from "react";
import PropTypes from "prop-types";
import InformationBlocks from "../InformationBlocks/InformationBlocks";

const Infromations = ({ gender, status, species, origin, type }) => {
  return (
    <div className="informations">
      <InformationBlocks title="Gender" descrtiption={gender} />
      <InformationBlocks title="Status" descrtiption={status} />
      <InformationBlocks title="Specie" descrtiption={species} />
      <InformationBlocks title="Origin" descrtiption={origin} />
      <InformationBlocks title="Type" descrtiption={type} />
    </div>
  );
};

export default Infromations;

Infromations.propTypes = {
  gender: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  type: PropTypes.string,
};

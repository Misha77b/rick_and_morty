import React from 'react';
import PropTypes from "prop-types";
import InformationBlocks from '../InformationBlocks/InformationBlocks';

const Infromations = ({ gender, status, specie, origin, type}) => {
  // const originName = Object.entries(origin)
  return (
    <div className='informations'>
      <InformationBlocks title="Gender" descrtiption={gender} />
      <InformationBlocks title="Status" descrtiption={status} />
      <InformationBlocks title="Specie" descrtiption={specie} />
      <InformationBlocks title="Origin" descrtiption={origin} />
      <InformationBlocks title="Type" descrtiption={type} />
    </div>
  )
}

export default Infromations

Infromations.propTypes = {
  gender: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  origin: PropTypes.object,
  type: PropTypes.string
};
  
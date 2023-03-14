import React from 'react';
import PropTypes from "prop-types";
import "./InformationBlocks.scss"

const InformationBlocks = ({ title, descrtiption }) => {
    
  return (
    <div className='informations-blocks'>
      <h4 className='informations-blocks__title'>{title}</h4>
      <span className='informations-blocks__description'>
        {descrtiption === "" ? "Undefined" : descrtiption}
      </span>
    </div>
  )
}

export default InformationBlocks

InformationBlocks.propTypes = {
    title: PropTypes.string,
    descrtiption: PropTypes.string,
};
  
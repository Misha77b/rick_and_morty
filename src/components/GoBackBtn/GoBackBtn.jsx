import React from "react";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

const GoBackBtn = ({ btnStyle, goBack }) => {
  return (
    <Button onClick={goBack} sx={btnStyle}>
      <ArrowBackIcon sx={{ paddingRight: "8px" }} />
      GO Back
    </Button>
  );
};

export default GoBackBtn;

GoBackBtn.propTypes = {
  btnStyle: PropTypes.object,
  goBack: PropTypes.func,
};

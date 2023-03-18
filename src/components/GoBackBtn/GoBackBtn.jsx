import React from "react";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

const btnStyle = {
  width: "130px",
  margin: "25px 0 0 55px",
  fontFamily: "Karla",
  fontWeight: "700",
  fontSize: "18px",
  color: "black",
  '@media (max-width: 600px)': {
    margin: "25px 0 0 25px",
  },
};

const GoBackBtn = ({ goBack }) => {
  return (
    <Button onClick={goBack} sx={btnStyle}>
      <ArrowBackIcon sx={{ paddingRight: "8px" }} />
      GO Back
    </Button>
  );
};

export default GoBackBtn;

GoBackBtn.propTypes = {
  goBack: PropTypes.func,
};

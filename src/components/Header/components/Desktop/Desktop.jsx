import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { navigation } from "../../navigation";
import "./Desktop.scss";

const Desktop = () => {
  return (
    <Box component="div" className="nav-box">
      {navigation.map((nav) => (
        <NavLink
          key={nav.key}
          className={({ isActive }) =>
            isActive ? "nav-box__btn-active" : "nav-box__btn"
          }
          to={nav.path}
        >
          {nav.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default Desktop;

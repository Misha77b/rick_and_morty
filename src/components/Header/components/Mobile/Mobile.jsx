import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { navigation } from "../../navigation";
import "./Mobile.scss";

const Mobile = () => {
  const [anchorElNav, setAnchorElNav] = useState(false);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  return (
    <Box className="mobile-menu-box">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        {anchorElNav ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {navigation.map((nav) => (
          <MenuItem
            onClick={handleCloseNavMenu}
            key={nav.key}
            component={NavLink}
            to={nav.path}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {nav.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Mobile;

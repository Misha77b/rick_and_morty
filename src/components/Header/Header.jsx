import React from "react";
import "./Header.scss";
import { AppBar, Container, Toolbar } from "@mui/material";
import Desktop from "./components/Desktop/Desktop";
import Mobile from "./components/Mobile/Mobile";

const appBarStyle = {
  background: "#053742",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Roboto",
};

const Header = () => {
  return (
    <AppBar position="static" sx={appBarStyle}>
      <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Toolbar disableGutters>
          {/* For desktops */}
          <Desktop />

          {/* For mobile phones */}
          <Mobile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

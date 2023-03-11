import React from "react";
import "./Home.scss";

import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="cards-container">
        <Card />
      </div>
    </>
  );
};

export default Home;

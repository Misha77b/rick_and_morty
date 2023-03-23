import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../Pages/Characters/Characters";
import CharacterPage from "../Pages/CharacterPage/CharacterPage";
import Locations from "../Pages/Locations/Locations";
import LocationInfo from "../Pages/LocationInfo/LocationInfo";
import Episodes from "../Pages/Episodes/Episodes";
import EpisodeInfo from "../Pages/EpisodeInfo/EpisodeInfo";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      
      <Route path="/locations" element={<Locations />} />
      <Route path="/location/:id" element={<LocationInfo />} />
      
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episode/:id" element={<EpisodeInfo />} />
    </Routes>
  );
};

export default RootRoutes;

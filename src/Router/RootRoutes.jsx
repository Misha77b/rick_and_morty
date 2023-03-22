import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../Pages/Characters/Characters";
import CharacterPage from "../Pages/CharacterPage/CharacterPage";
import Locations from "../Pages/Locations/Locations";
import Episodes from "../Pages/Episodes/Episodes";
import LocationInfo from "../Pages/LocationInfo/LocationInfo";

const RootRoutes = () => {
  return (
    <Routes>
        {/* characters */}
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      {/* Locations */}
      <Route path="/locations" element={<Locations />} />
      <Route path="/location/:id" element={<LocationInfo />} />
      {/* episodes */}
      <Route path="/episodes" element={<Episodes />} />
    </Routes>
  );
};

export default RootRoutes;

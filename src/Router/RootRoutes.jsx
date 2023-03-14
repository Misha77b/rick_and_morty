import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../Pages/Characters/Characters";
import CharacterPage from "../Pages/CharacterPage/CharacterPage";
import Location from "../Pages/Location/Location";
import Episodes from "../Pages/Episodes/Episodes";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/locations" element={<Location />} />
      <Route path="/episodes" element={<Episodes />} />
    </Routes>
  );
};

export default RootRoutes;

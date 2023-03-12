import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "../Pages/Characters/Characters";
import Location from "../Pages/Location/Location";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
};

export default RootRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../Pages/Home/Home"

const RootRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default RootRoutes
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/projects" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "../Pages/LandingPage";
import DetailsPage from "../Pages/DetailsPage";

const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Need to add other route for page containing one review */}
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

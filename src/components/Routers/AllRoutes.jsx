import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginViaOTP from "../Navbar/LoginViaOTP";
import HomePage from "./HomePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage/otp" element={<LoginViaOTP />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

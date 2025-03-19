import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../Components/Navbar.jsx";
import "../Components/App.css";

const BaseLayout = () => {
  return (
    <>
      <Box sx={{ color: "#eceff1", height: "100%" }}>
        <NavBar />
        <Outlet /> {/* This will render Home, About, or Contact dynamically */}
      </Box>
    </>
  );
};

export default BaseLayout;

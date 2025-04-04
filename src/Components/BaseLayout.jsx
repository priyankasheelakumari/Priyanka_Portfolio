import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../Components/Navbar.jsx";
import Home from "../Components/HomePage.jsx";
import About from "../Components/About.jsx";
import Companies from "../Components/Companies.jsx";
import Projects from "../Components/Projects.jsx";
import Contact from "../Components/ContactPage.jsx";
import "../Components/App.css";
import  Skills  from "./Skills.jsx";

const BaseLayout = () => {
  return (
    <Box sx={{ color: "#eceff1", height: "100%" }}>
      <NavBar />
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="companies">
        <Companies />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>

      <Box id="contact">
        <Contact />
      </Box>
      <Outlet />
    </Box>
  );
};

export default BaseLayout;

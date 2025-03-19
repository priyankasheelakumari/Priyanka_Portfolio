import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography, Link } from "@mui/material";
import CV from "../assets/cv.pdf";
import profileimage from "../assets/pro1.jpg";

import { ReactTyped } from "react-typed";
const About = () => {
  return (
    <Box sx={{  display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center",justifyContent: "center",gap: { xs: 4, md: 10 }, 
      textAlign: { xs: "center", md: "left" }, // Center text on mobile
      px: { xs: 4, md: 10 }, // Responsive padding
      py: { xs: 6, md: 10 },}}>
      <Box sx={{ maxWidth: { xs: "80%", sm: "50%", md: "30%" }, flexShrink: 0 }}>
    <img
      className="pro-image"
      src={profileimage}
      alt="Profile"
      style={{ width: "100%", height: "auto", borderRadius: "45%" }} 
    />
  </Box>
      <Box sx={{  maxWidth: { xs: "90%", md: "50%" } }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Hello, I am </Typography>
        <Typography variant="h2"sx={{ mb: 2, fontWeight: "bold" }}>Priyanka Sheelakumari</Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          <ReactTyped
            strings={[
              "Front End Developer",
              "React Developer",
              "Software Engineer",
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </Typography>
        <Link
        href={CV}
        underline="none"
        variant="inherit"
        target="_blank"
        aria-label="click to view resume"
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "#d500f9",
            boxShadow: " 0 0 10px rgb(182, 154, 182) ",
            
          }}
        >
          Resume
        </Button>
      </Link>
      </Box>
      
    </Box>
  );
};
export default About;

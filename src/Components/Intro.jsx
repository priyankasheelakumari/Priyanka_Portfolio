import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography, Link } from "@mui/material";
import CV from "../assets/cv.pdf";
import { ReactTyped } from "react-typed";
const Intro = () => {
  return (
    <Box
      sx={{
        padding: 10,
        mt: 30,
      }}
    >
      <Typography variant="h2">Hello, I am </Typography>
      <Typography variant="h1">Priyanka Sheelakumari</Typography>
      <Box>
        <Typography variant="h3">
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
      </Box>
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
  );
};
export default Intro;

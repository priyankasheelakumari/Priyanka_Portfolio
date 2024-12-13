import React from "react";
import Box from "@mui/material/Box";
import { Button,Typography } from "@mui/material";

const Intro = () => {
  return (
    <Box
      sx={{
        padding: 10,
        mt:30,
      }}
    >
      <Typography variant="h2">Hello, I am </Typography>
      <Typography variant="h1">Priyanka Sheelakumari</Typography>
      <Typography variant="h3">Front-end Developer </Typography>
      <Button variant='filled' size="large" sx={{m:5}}>Hire Me</Button>
    </Box>
  );
};
export default Intro;

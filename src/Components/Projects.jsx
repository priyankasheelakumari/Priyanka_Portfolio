import { Box } from '@mui/material';
import * as React from 'react';
import athiAgency from '../assets/agency.jpg'
import onlineFood from '../assets/onlinefoodorder.jpg'
import driving from '../assets/driving.jpg'





export default function Projects() {
  

  return (
    <Box sx={{ color: "#eceff1", height: "100dvh", overflow: "hidden",alignItems: "center",justifyContent: "center",py:"15rem",gap:"2vh" ,display: "flex"}}>
      <img
                className="pro-image"
                src={athiAgency}
                alt="Profile"
                style={{ width: "20%", height: "60%", borderRadius: "5%" }}
              />
              
      <img
                className="pro-image"
                src={onlineFood}
                alt="Profile"
                style={{ width: "20%", height: "auto", borderRadius: "5%" }}
              />
      <img
                className="pro-image"
                src={driving}
                alt="Profile"
                style={{ width: "20%", height: "60%", borderRadius: "5%" }}
              />

      { /**<h1>Athi Agency E-commerce site</h1>
      <h1>Online food ordering</h1>
      <h1>Driving school</h1> **/}
    </Box>
    
  );
}

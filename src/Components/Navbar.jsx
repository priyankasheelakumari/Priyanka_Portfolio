import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <Box sx={{}}>
      <AppBar
        position="fixed"
        sx={{ bgcolor: " rgba(0, 0, 0, 0.3)", justifyContent: "flex-end" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#212121"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <NavLinks  sx={{color:"white",bgcolor:"red",justifyContent:"flex-end"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

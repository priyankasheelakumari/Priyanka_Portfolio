import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ }}>
      <AppBar position="static" sx={{ bgcolor: " rgba(0, 0, 0, 0.3)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#212121"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="#ede7f6">Home</Button>
          <Button color="#ede7f6">About</Button>
          <Button color="#ede7f6">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { NavLink } from "react-router-dom";

import { Box } from "@mui/material";

const navLinks = [
  { name: "Home", href:"/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = () => (
  <Box sx={{display:"flex",alignItems:"center",gap:15}}>
    {navLinks.map((link) => {
      return (
        <NavLink key={link.name} to={link.href}
        style={{color:"white",textDecoration:"none"}}>
          {link.name}
        </NavLink>
      );
    })}
  </Box>
);

export default NavLinks;

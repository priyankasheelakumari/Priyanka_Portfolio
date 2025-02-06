import { NavLink } from "react-router-dom";

import { Box } from "@mui/material";

const navLinks = [
  { name: "Home", href:"/home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const NavLinks = () => (
  <Box>
    {navLinks.map((link) => {
      return (
        <NavLink key={link.name} to={link.href}>
          {link.name}
        </NavLink>
      );
    })}
  </Box>
);

export default NavLinks;

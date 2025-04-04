import { AppBar, Toolbar, Button } from "@mui/material";

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: " rgba(0, 0, 0, 0.3)", justifyContent: "flex-end" }}>
      <Toolbar>
      <Button color="inherit" onClick={() => scrollToSection("home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("about")}>
          About
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("companies")}>
          Companies
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("projects")}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => scrollToSection("contact")}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

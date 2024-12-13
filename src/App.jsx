import { useState } from "react";
import CompaniesBtn from "./Components/CompaniesBtn";
import Intro from "./Components/Intro";
import { DETAILS } from "./Components/companyAcheivements";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import NavBar from "./Components/Navbar";
import profileimage from "./assets/pro1.jpg";
import { SkillsIcons } from "./Components/SkillsIcons";
import "./Components/App.css";

function App() {
  const [selectedCompany, setselectedCompany] = useState("Vosyn");
  const handleClick = (selectedCompany) => {
    setselectedCompany(selectedCompany);
  };

  return (
    <Box sx={{ color: "#eceff1", height: "100%" }}>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <img className="pro-image" src={profileimage} />
        <Intro />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CompaniesBtn onSelect={() => handleClick("Vosyn")}>Vosyn</CompaniesBtn>
        <CompaniesBtn onSelect={() => handleClick("Nyeste")}>
          Nyeste
        </CompaniesBtn>
        <CompaniesBtn onSelect={() => handleClick("Awsm")}>Awsm</CompaniesBtn>
      </Box>
      <Container
        sx={{
          bgcolor: "#b39ddb",
          color: "#eceff1",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          padding: 10,
        }}
      >
        {selectedCompany && (
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "#424242" }}
            >
              {DETAILS[selectedCompany].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "end", color: "#424242", mb: 2 }}
            >
              {DETAILS[selectedCompany].year}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "#424242" }}
            >
              {DETAILS[selectedCompany].acheivements}
            </Typography>
          </Box>
        )}
      </Container>
      <SkillsIcons />
    </Box>
  );
}

export default App;

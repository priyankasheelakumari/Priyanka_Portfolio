import { useState } from "react";
import CompaniesBtn from "./CompaniesBtn.jsx";
import { DETAILS } from "./companyAcheivements.js";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import "../Components/App.css";

const Companies = () => {
  const [selectedCompany, setselectedCompany] = useState("Vosyn");
  const handleClick = (selectedCompany) => {
    setselectedCompany(selectedCompany);
  };
  return (
    <>
      <Box sx={{ color: "#eceff1", height: "100dvh", overflow: "hidden",alignItems: "center",
        justifyContent: "center",py:"15rem" }}>
        <Container
          sx={{
            bgcolor: "#b39ddb",
            color: "#eceff1",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: { xs: "auto" }, // Adjust height for responsiveness
            padding: { xs: 4, md: 10 }, // Responsive padding
            borderRadius: "10px",
            textAlign: { xs: "center", md: "left" },
           
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", margin: 10,}}>
            <CompaniesBtn onSelect={() => handleClick("Vosyn")}>
              Vosyn
            </CompaniesBtn>
            <CompaniesBtn onSelect={() => handleClick("Nyeste")}>
              Nyeste
            </CompaniesBtn>
            <CompaniesBtn onSelect={() => handleClick("Awsm")}>
              Awsm
            </CompaniesBtn>
          </Box>

          {selectedCompany && (
            <Box  sx={{}} >
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
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                  marginTop:"2rem"
                  

                }}
              >
                {DETAILS[selectedCompany].stack.map((tech, index) => (
                  <Button
                    key={index}
                    variant={"contained"}
                    sx={{
                      color: "Black",
                      bgcolor: "inherit",
                      boxShadow: "0 0 10px rgb(250, 241, 250)",
                      marginBottom:"2rem"
                    }}
                  >
                    {tech}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Companies;

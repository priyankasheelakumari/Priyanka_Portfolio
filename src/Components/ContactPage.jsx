import { useState } from 'react';
import Box from "@mui/material/Box";
import { Button, Container, TextField, Typography } from "@mui/material";
import Input from '@mui/material/Input';


const ariaLabel = { 'aria-label': 'description' };

export default function Contact() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(value) {
      setEnteredEmail(value);
   
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');

  return (
    
    <Container  sx={{maxWidth: { xs: "90%", md: "50%" }, px: { xs: 4, md: 10 },py: { xs: 6, md: 10 }}}>
       <Typography variant="h3" sx={{ mb: 2 }}>Let's get into work</Typography>
       <Typography variant="h4">Drop me a Line</Typography>
      <Box
       component="form"
       sx={{ '& > :not(style)': { m: 1, width: '25ch' ,display:'flex'} }}
       noValidate
       autoComplete="off"
       >

              
              <Input 
                className={`label ${emailNotValid ? 'invalid' : ''}`}
                variant="standard"
                onChange={(event) => handleInputChange('name', event.target.value)}
                placeholder="Your Name" inputProps={ariaLabel}
                color="secondary" 
                 />
             
             <Input 
                className={`label ${emailNotValid ? 'invalid' : ''}`}
                variant="standard"
                onChange={(event) => handleInputChange('email', event.target.value)}
                placeholder="Email address" inputProps={ariaLabel}
                color="secondary" 
                 />
                 
              <TextField
                className={`label ${emailNotValid ? 'invalid' : ''}`}
                variant="filled"
                onChange={(event) => handleInputChange('message', event.target.value)}
                placeholder=" Message" inputProps={ariaLabel}
                color="secondary" 
                 />
               <Button onClick={handleLogin} variant='contained' sx={{bgcolor:"#d500f9"}}>Submit</Button>

      </Box>
     
        
      
    </Container>
  );
}

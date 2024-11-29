import { useState } from 'react'
import CompaniesBtn from './Components/CompaniesBtn'
import Main from './Components/Intro'
import { DETAILS } from './Components/companyAcheivements'
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

function App() {
  const [selectedCompany, setselectedCompany] = useState('Vosyn');
   const handleClick=(selectedCompany)=>{
    setselectedCompany(selectedCompany)

   }
  

return(
      <Box sx={{bgcolor:'#ff9100', color:'#eceff1',height:'100%'}}>
        <Main />
        <Box sx={{display:'flex',justifyContent:'center'}} >
          <CompaniesBtn onSelect={()=>handleClick('Vosyn')}>Vosyn</CompaniesBtn>
          <CompaniesBtn onSelect={()=>handleClick('Nyeste')}>Nyeste</CompaniesBtn>
          <CompaniesBtn onSelect={()=>handleClick('Awsm')}>Awsm</CompaniesBtn>
        </Box>
        <Container 
          sx={{
            bgcolor:'#ffd180', 
            color:'#eceff1',
            justifyContent:'center',
            alignItems:'center',
            height:'300px',
            padding:10
            }} 
        >
          <Typography variant='h4' sx={{textAlign:'center'}}>{DETAILS[selectedCompany].title}</Typography>
          <Typography variant='body2' sx={{textAlign:'end'}}>{DETAILS[selectedCompany].year}</Typography>
          <Typography variant='body2'>{DETAILS[selectedCompany].acheivements}</Typography>

        </Container>

        
      </Box>
     )
}

export default App

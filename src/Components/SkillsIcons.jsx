import React from 'react'
import Box from '@mui/material/Box';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';


export const SkillsIcons = () => {
  return (
    <Box sx={{display:"flex", gap:"2vh",alignItems:"center",justifyContent:"center",mt:10}}>
        <JavascriptIcon sx={{border:'2px solid black',fontSize:"10vh"}}/>
        <CssIcon  sx={{border:'2px solid black',fontSize:"10vh"}}/>
        <HtmlIcon  sx={{border:'2px solid black',fontSize:"10vh"}}/>
    </Box>
  )
}
import React from 'react'
import Box from '@mui/material/Box';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';


export const SkillsIcons = () => {
  return (
    <Box>
        <JavascriptIcon  fontSize='medium' sx={{p:0 ,border:'5px solid black'}}/>
        <CssIcon fontSize='medium' sx={{p:0,border:'5px solid black'}}/>
        <HtmlIcon fontSize='medium' sx={{p:0,border:'5px solid black'}}/>
    </Box>
  )
}
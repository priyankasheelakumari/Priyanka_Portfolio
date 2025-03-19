import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Projects() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Project 1" value="1" />
            <Tab label="Project 2" value="2" />
            <Tab label="Project 3" value="3" />
          </TabList>
        </Box>
        {/*
        </TabContext>
        <TabPanel value="1"><Project1 /></TabPanel> 
        <TabPanel value="2"><Project2 /></TabPanel>
        <TabPanel value="3"><Project3 /></TabPanel>
        */}
      </TabContext>
    </Box>
  );
}

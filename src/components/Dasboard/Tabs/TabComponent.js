import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function TabComponent() {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
  }

  return (
   <Box>
   
      <TabContext value={value}>
       
          <TabList onChange={handleChange}   variant="fullWidth" className='tab'>
            <Tab label="Grid" value="Grid" sx={style}/>
            <Tab label="List" value="List" sx={style}/>
            
          </TabList>
       
        <TabPanel value="Grid"><div>mapping Grid</div></TabPanel>
        <TabPanel value="List"><div>mapping List</div></TabPanel>
      </TabContext>
    </Box>
  );
}

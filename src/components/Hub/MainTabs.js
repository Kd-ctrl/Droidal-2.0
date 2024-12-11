import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FileUploadTab from './FileUpload';  // Import the FileUploadTab component
import TriggerTab from './Trigger';  // Import the TriggerTab component
import QueueTab from './Queue';  // Import the QueueTab component
import ConfigTab from './Config';  // Import the ConfigTab component
import AssetTab from './Asset';  // Import the AssetTab component
import TransactionTab from './Transaction';  // Import the TransactionTab component
import SettingsTab from './Settings';  // Import the SettingsTab component

const MainTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* <Tab label="File Upload" value="1" /> */}
            <Tab label="Trigger" value="1" />
            <Tab label="Queue" value="2" />
            {/* <Tab label="Config" value="4" /> */}
            <Tab label="Asset" value="3" />
            {/* <Tab label="Transaction" value="4" /> */}
            <Tab label="Settings" value="4" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">
          <FileUploadTab />
        </TabPanel> */}
        <TabPanel value="1">
          <TriggerTab /> {/* Render TriggerTab Component */}
        </TabPanel>
        <TabPanel value="2">
          <QueueTab /> {/* Render QueueTab Component */}
        </TabPanel>
        {/* <TabPanel value="4">
          <ConfigTab /> 
        </TabPanel> */}
        <TabPanel value="3">
          <AssetTab /> {/* Render AssetTab Component */}
        </TabPanel>
        {/* <TabPanel value="4">
          <TransactionTab />
        </TabPanel> */}
        <TabPanel value="4">
          <SettingsTab /> {/* Render SettingsTab Component */}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MainTabs;

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import MachineDrawer from './Drawers/MachineDrawer';


const MachineColumn = [
  { field: 'name', headerName: 'Name', width: 300 }, // Adjusted for better visibility
  { field: 'ipAddress', headerName: 'IP Address', width: 250 }, // IPs are short but precise
  { field: 'username', headerName: 'User Name', width: 250 }, // Sufficient for common names
  { field: 'password', headerName: 'Password', width: 250 }, // Standard width for masked passwords
  { field: 'actions', headerName: 'Actions', width: 233 }, // Extra space for buttons
];

const MachineRows = [
  { id: 1, name: 'Machine 1', ipAddress: '192.168.1.1', username: 'user1', password: 'pass1', actions: 'Edit/Delete' },
  { id: 2, name: 'Machine 2', ipAddress: '192.168.1.2', username: 'user2', password: 'pass2', actions: 'Edit/Delete' },
  { id: 3, name: 'Machine 3', ipAddress: '192.168.1.3', username: 'user3', password: 'pass3', actions: 'Edit/Delete' },
];


const paginationModel = { page: 0, pageSize: 5 };

const SettingsTab = () => {
  const [value, setValue] = useState('1');
  const [drawerOpen, setDrawerOpen] = useState(false);


  const handleTriggerClick = () => {
    setDrawerOpen(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Machine" value="1" />
            <Tab label="License" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
          <MachineDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)} // Pass a function to close the drawer
            />
            </div>
              <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
            <DataGrid
              rows={MachineRows}
              columns={MachineColumn}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              hideFooterSelectedRowCount
              sx={{
                border: 0,
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#2C5282', // Set the header background color
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                  color: '#FFFFFF', // Set the text color to white
                },
              }}
            />
          </Paper>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <h1>License Content</h1>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default SettingsTab;
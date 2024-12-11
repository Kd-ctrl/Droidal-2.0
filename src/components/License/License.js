import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { Button, Select, MenuItem, Checkbox, FormControlLabel, TextField, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// License Columns
const LicenseColumn = [
  { field: 'name', headerName: 'Client Name', width: 200 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'mailId', headerName: 'Mail-ID', width: 200 },
  { field: 'developerOption', headerName: 'Developer Options', width: 200 },
  { field: 'assignedLicense', headerName: 'Assigned License', width: 200 },
  { field: 'deployedLicense', headerName: 'Deployed License', width: 200 },
];

const LicenseRows = [
  { id: 1, name: 'Jiffy', address: 'Bangalore', mailId: 'Jiffy.ai', developerOption: 'Developer', assignedLicense: '9hWWoihW6Os3vQqr', deployedLicense: 'KgBCIRtIDEfnmRSB' },
  { id: 2, name: 'FMS', address: 'Trivandrum', mailId: 'fms.in', developerOption: 'Production robot', assignedLicense: 'joKupLAP0slDEuQw', deployedLicense: '04OVrHlqhNTLK16R' },
];

const LicenseContent = () => {
  const [value, setValue] = useState('1');
  const [formData, setFormData] = useState({
    clientName: '',
    address: '',
    mailId: '',
    licenseType: 'Developer License',
    duration: 1,
  });

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="License tabs">
            <Tab label="License Form" value="1" />
            <Tab label="License List" value="2" />
          </TabList>
        </Box>

        {/* License Form Tab */}
        <TabPanel value="1">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Paper sx={{ padding: 4, backgroundColor: '#F0F4FF', width: '70%' }}>
              <h2 style={{ textAlign: 'center' }}>License Form</h2>
              <Grid container spacing={3}>
                {/* Left Column */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="clientName"
                    label="Client Name"
                    value={formData.clientName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="mailId"
                    label="Mail-ID"
                    value={formData.mailId}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.licenseType === 'Developer License'}
                          onChange={() => setFormData((prev) => ({ ...prev, licenseType: 'Developer License' }))}
                        />
                      }
                      label="Developer License"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.licenseType === 'Production robot'}
                          onChange={() => setFormData((prev) => ({ ...prev, licenseType: 'Production robot' }))}
                        />
                      }
                      label="Production Robot"
                    />
                  </div>
                </Grid>

                {/* Duration Dropdown */}
                <Grid item xs={12} sm={6}>
                  <Select
                    fullWidth
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={1}>1 Year</MenuItem>
                    <MenuItem value={2}>2 Years</MenuItem>
                    <MenuItem value={3}>3 Years</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Box mt={3} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={() => console.log(formData)}>
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
        </TabPanel>

        {/* License List Tab */}
        <TabPanel value="2">
          <Paper sx={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
            <DataGrid
              rows={LicenseRows}
              columns={LicenseColumn}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              sx={{
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#2C5282',
                  color: '#FFFFFF',
                },
              }}
            />
          </Paper>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LicenseContent;

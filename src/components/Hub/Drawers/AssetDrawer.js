import React, { useState } from 'react';
import { 
  Drawer, 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Checkbox, 
  FormControlLabel, 
  IconButton, 
  Grid 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSnackbar } from 'notistack';

const AssetDrawer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    assetName: '',
    enterName: '',
    assetType: '',
    textValue: '',
    labels: '',
    description: '',
    enforceUniqueReference: false,
    storeEncrypted: false,
    autoRetry: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleSubmit = () =>{
    setIsOpen(false);
    enqueueSnackbar('Asset Created successfully!', { variant: 'success' }); // We can Change the Variant success, error, warning, info
  }

  const handleClose = () =>{
    setIsOpen(false);
    enqueueSnackbar('Asset Cancelled!', { variant: 'error' });
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PlayArrowIcon />}
        onClick={toggleDrawer(true)}
        style={{ backgroundColor: '#2C5282' }}
      >
        Create Asset
      </Button>
      
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '65vh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            padding: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Create Asset</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>

        <Grid container spacing={2}>
          {/* Left Column: General Details */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>General Details</Typography>
            <TextField
              name="assetName"
              label="Asset Name"
              variant="outlined"
              fullWidth
              value={formData.assetName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              name="enterName"
              label="Enter Name"
              variant="outlined"
              fullWidth
              value={formData.enterName}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Asset Type</InputLabel>
              <Select
                name="assetType"
                value={formData.assetType}
                onChange={handleChange}
                label="Asset Type"
              >
                <MenuItem value="TEXT">Text</MenuItem>
                <MenuItem value="BOOLEAN">Boolean</MenuItem>
                <MenuItem value="INTEGER">Integer</MenuItem>
                <MenuItem value="CREDENTIALS">Credentials</MenuItem>
              </Select>
            </FormControl>
           
          </Grid>

          {/* Right Column: Asset Value */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Asset Value</Typography>
            <TextField
              name="textValue"
              label={`Text`}
              variant="outlined"
              fullWidth
              value={formData.textValue}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              name="labels"
              label="Labels"
              variant="outlined"
              fullWidth
              value={formData.labels}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
          style={{ backgroundColor: '#0F2942', color: '#fff' }}
          onClick={handleSubmit} 
        >
          Submit Asset
        </Button>
      </Drawer>
    </div>
  );
};

export default AssetDrawer;

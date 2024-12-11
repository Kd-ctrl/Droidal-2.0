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

const QueueDrawer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    enforceUniqueReference: false,
    storeEncrypted: false,
    autoRetry: false,
    noOfRetries: '',
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
    enqueueSnackbar('Queue Created successfully!', { variant: 'success' }); // We can Change the Variant success, error, warning, info
  }

  const handleClose = () =>{
    setIsOpen(false);
    enqueueSnackbar('Queue Stopped!', { variant: 'error' });
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
        Create Queue
      </Button>
      
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '60vh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingX: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Create Queue</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>General Details</Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>No. of Retries</InputLabel>
                <Select
                  name="noOfRetries"
                  value={formData.noOfRetries}
                  onChange={handleChange}
                  label="No. of Retries"
                >
                  <MenuItem value={1}>Retry 1</MenuItem>
                  <MenuItem value={2}>Retry 2</MenuItem>
                  <MenuItem value={3}>Retry 3</MenuItem>
                  <MenuItem value={4}>Retry 4</MenuItem>
                  <MenuItem value={5}>Retry 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Full Width */}
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            {/* Left Column - Checkboxes */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Additional Options</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    name="enforceUniqueReference"
                    checked={formData.enforceUniqueReference}
                    onChange={handleChange}
                  />
                }
                label="Enforce Unique Reference"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="storeEncrypted"
                    checked={formData.storeEncrypted}
                    onChange={handleChange}
                  />
                }
                label="Store in Encrypted Format"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="autoRetry"
                    checked={formData.autoRetry}
                    onChange={handleChange}
                  />
                }
                label="Auto Retry"
              />
            </Grid>

            {/* Right Column - Checkbox */}
            
          </Grid>

          <Button 
            variant="contained" 
            fullWidth 
            sx={{ mt: 2 }}
            style={{ backgroundColor: '#0F2942', color: '#fff' }}
            onClick={handleSubmit} 
          >
            Submit Queue
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default QueueDrawer;

import React, { useState } from 'react';
import { 
  Drawer, 
  Box, 
  Button, 
  TextField, 
  Typography, 
  IconButton, 
  Grid, 
  InputAdornment 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSnackbar } from 'notistack';

const MachineDrawer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    machineIP: '',
    width: 1920,
    height: 1080,
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && 
        (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = () => {
    setIsOpen(false);
    enqueueSnackbar('Machine Created successfully!', { variant: 'success' });
  };

  const handleClose = () => {
    setIsOpen(false);
    enqueueSnackbar('Cancelled!', { variant: 'warning' });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<PlayArrowIcon />}
        onClick={toggleDrawer(true)}
        style={{ backgroundColor: '#2C5282' }}
      >
        Create Machine
      </Button>

      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            height: '58vh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingX: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Create Machine</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>Machine Details</Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="machineIP"
                label="Machine IP"
                variant="outlined"
                fullWidth
                value={formData.machineIP}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="width"
                label="Width"
                variant="outlined"
                fullWidth
                value={formData.width}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="height"
                label="Height"
                variant="outlined"
                fullWidth
                value={formData.height}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilityToggle}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            style={{ backgroundColor: '#0F2942' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default MachineDrawer;

import React, { useState } from 'react';
import { 
  Drawer, 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
  IconButton,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useSnackbar } from 'notistack';

const ConfigDrawer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    projectName: '',
    taskName: '',
    machineDetails: '',
    cronQuery: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && 
        (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleSubmit = () =>{
    setIsOpen(false);
    enqueueSnackbar('Triggered successfully!', { variant: 'success' }); // We can Change the Variant success, error, warning, info
  }

  const handleClose = () =>{
    setIsOpen(false);
    enqueueSnackbar('Triggering Stopped!', { variant: 'warning' });
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
        Create Config
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
            paddingX: 3
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Create Trigger</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon onClick={handleClose} />
          </IconButton>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>General Details</Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                label="Enter Trigger Name"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Project Name</InputLabel>
                <Select
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  label="Project Name"
                >
                  <MenuItem value="project1">Project 1</MenuItem>
                  <MenuItem value="project2">Project 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Task Name</InputLabel>
                <Select
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleChange}
                  label="Task Name"
                >
                  <MenuItem value="task1">Task 1</MenuItem>
                  <MenuItem value="task2">Task 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Machine Details</InputLabel>
                <Select
                  name="machineDetails"
                  value={formData.machineDetails}
                  onChange={handleChange}
                  label="Machine Details"
                >
                  <MenuItem value="machine1">Machine 1</MenuItem>
                  <MenuItem value="machine2">Machine 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="cronQuery"
                label="Cron Query"
                variant="outlined"
                fullWidth
                value={formData.cronQuery}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button 
            variant="contained" 
            // color="primary" 
            fullWidth
            sx={{ mt: 2 }}
            style={{ backgroundColor:'#0F2942' }}
            onClick={handleSubmit} // Trigger submit action
          >
            Submit
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default ConfigDrawer;
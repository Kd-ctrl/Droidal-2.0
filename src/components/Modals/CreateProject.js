import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#F5F7FA',
  borderRadius: '15px', // Rounded corners
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  p: 4,
};

const CreateProjectModal = ({ onAddProject }) => {
    const [open, setOpen] = React.useState(false);
    const [projectName, setProjectName] = React.useState('');
    const [projectDescription, setProjectDescription] = React.useState('');
    const [projectVersion, setProjectVersion] = React.useState('');

    // IF ERROR IT SHOWS FOR REQUIRED FIELDS
    const [projectNameError, setProjectNameError] = React.useState(false);
    const [projectVersionError, setProjectVersionError] = React.useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleCreateProject = () => {
        let hasError = false;
    
        // Validate Project Name
        if (!projectName.trim()) {
          setProjectNameError(true);
          hasError = true;
        } else {
          setProjectNameError(false);
        }
    
        // Validate Dependencies
        if (!projectVersion.trim()) {
          setProjectVersionError(true);
          hasError = true;
        } else {
          setProjectVersionError(false);
        }
    
        if (hasError) {
          return; // Exit if there are validation errors
        }
    
        const newProject = {
          name: projectName,
          id: `project-${Date.now()}`,
          description: projectDescription,
          projectVersion,
        };
    
        // Call the parent callback to add the project
        onAddProject(newProject);
    
        // Reset fields
        setProjectName('');
        setProjectDescription('');
        setProjectVersion('');
        handleClose();
      };
  
    return (
      <div>
        <button
          id="open-modal-btn"
          onClick={handleOpen}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2C5282',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'none'
          }}
        >
          Create Project
        </button>
  
        <Modal
          aria-labelledby="create-project-title"
          aria-describedby="create-project-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="create-project-title" variant="h5" component="h2" style={{ marginBottom: '20px' }}>
                Create Your Project
              </Typography>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
            <TextField
                label="Project Name"
                variant="outlined"
                fullWidth
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                  setProjectNameError(false); // Clear error on change
                }}
                error={projectNameError} // Display error styling if validation fails
                helperText={projectNameError ? 'Project Name is required' : ''} // Error message
              />
                <TextField
                  label="Project Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
                <TextField
                    select
                    label="Project Version"
                    value={projectVersion}
                    onChange={(e) => {
                    setProjectVersion(e.target.value);
                    setProjectVersionError(false); // Clear error on change
                    }}
                    error={projectVersionError} // Display error styling if validation fails
                    helperText={projectVersionError ? 'Project Version is required' : ''} // Error message
                    variant="outlined"
                    fullWidth
                >
                  <MenuItem value="">-Select Project Version-</MenuItem>
                  <MenuItem value="Alpha v0.1">Alpha v0.1</MenuItem>
                  <MenuItem value="Beta v0.5">Beta v0.5</MenuItem>
                  <MenuItem value="Nova v1.0">Nova v1.0</MenuItem>
                  <MenuItem value="Aurora v1.5">Aurora v1.5</MenuItem>
                  <MenuItem value="Apex v2.0">Apex v2.0</MenuItem>
                  <MenuItem value="Cosmic v3.0">Cosmic v3.0</MenuItem>
                  <MenuItem value="Omega v3.5">Apex v3.5</MenuItem>
                  <MenuItem value="Nexus v4.0">Nexus v4.0</MenuItem>
                  <MenuItem value="Horizon v5.0">Horizon v5.0</MenuItem>
                </TextField>
                <Button
                  variant="contained"
                  onClick={handleCreateProject}
                  fullWidth
                  sx={{
                    backgroundColor: '#2C5282',
                    color: '#fff',
                    borderRadius: '8px',
                    padding: '10px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#1A4067',
                    },
                  }}
                >
                  CREATE PROJECT
                </Button>
              </Box>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };
  
  export default CreateProjectModal;
  

import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#F5F7FA',
  borderRadius: '15px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  p: 4,
};

const CreateTaskModal = ({ isOpen, onClose, onAddTask }) => {
    const [taskName, setTaskName] = React.useState('');
    const [taskDescription, setTaskDescription] = React.useState('');
    const [taskNameError, setTaskNameError] = React.useState(false);
  
    const handleCreateTask = () => {
      if (!taskName.trim()) {
        setTaskNameError(true);
        return;
      }
  
      const newTask = {
        name: taskName,
        description: taskDescription,
        id: `task-${Date.now()}`,
      };
  
      onAddTask(newTask);
  
      // Reset fields
      setTaskName('');
      setTaskDescription('');
      setTaskNameError(false);
      onClose(); // Close the modal
    };
  
    return (
      <Modal
        aria-labelledby="create-task-title"
        aria-describedby="create-task-description"
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography id="create-task-title" variant="h5" component="h2" style={{ marginBottom: '20px' }}>
              Create Task
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
                label="Task Name"
                variant="outlined"
                fullWidth
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                  setTaskNameError(false); // Clear error on change
                }}
                error={taskNameError}
                helperText={taskNameError ? 'Task Name is required' : ''}
              />
              <TextField
                label="Task Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleCreateTask}
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
                CREATE TASK
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
  };
  
  export default CreateTaskModal;
  

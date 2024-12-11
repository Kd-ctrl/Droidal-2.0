import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const AccountMenu = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null); // Close the menu by resetting anchorEl
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            backgroundColor: '#0F2942', // Background color of the menu
            color: 'white', // White text for contrast
            borderRadius: '10px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#0F2942',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/* Profile MenuItem */}
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Subtle hover effect
          }
        }}
      >
        <Avatar sx={{ width: 32, height: 32, mr: 2 }} /> 
        <Typography variant="body1" color="inherit">Profile</Typography>
      </MenuItem>

      {/* My Account MenuItem */}
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Subtle hover effect
          }
        }}
      >
        <Avatar sx={{ width: 32, height: 32, mr: 2 }} /> 
        <Typography variant="body1" color="inherit">My Account</Typography>
      </MenuItem>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />

      {/* Add Another Account MenuItem */}
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Subtle hover effect
          }
        }}
      >
        <ListItemIcon>
          <PersonAddIcon fontSize="small" sx={{ color: 'white' }} />
        </ListItemIcon>
        <Typography variant="body1" color="inherit">Add Another Account</Typography>
      </MenuItem>

      {/* Settings MenuItem */}
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Subtle hover effect
          }
        }}
      >
        <ListItemIcon>
          <SettingsIcon fontSize="small" sx={{ color: 'white' }} />
        </ListItemIcon>
        <Typography variant="body1" color="inherit">Settings</Typography>
      </MenuItem>

      {/* Logout MenuItem */}
      <MenuItem 
        onClick={handleClose}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)', // Subtle hover effect
          }
        }}
      >
        <ListItemIcon>
          <LogoutIcon fontSize="small" sx={{ color: 'white' }} />
        </ListItemIcon>
        <Typography variant="body1" color="inherit">Logout</Typography>
      </MenuItem>
    </Menu>
  );
};

export default AccountMenu;

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import '../../styles/adminstyles/admin.css';

function AdminHeader({ onThemeChange }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    onThemeChange(!darkMode);
  };

  return (
    <AppBar position="fixed" className="admin-header">
      <Toolbar>
        <Typography variant="h6" className="admin-header-title">
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={handleThemeChange}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;

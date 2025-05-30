import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../styles/adminstyles/admin.css';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'adminPassword') {  // Replace 'adminPassword' with actual password
      navigate('/admin/dashboard');
    } else {
      alert('Invalid Password!');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper className="admin-login-paper" elevation={3}>
        <Typography variant="h5" className="admin-login-title">
          Admin Login
        </Typography>
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-login-field"
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin} className="admin-login-button">
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default AdminLogin;

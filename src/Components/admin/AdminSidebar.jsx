import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, AddBox, Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import '../../styles/adminstyles/admin.css';

function AdminSidebar() {
  return (
    <Drawer variant="permanent" className="admin-sidebar">
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products/add">
          <ListItemIcon><AddBox /></ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products/edit">
          <ListItemIcon><Edit /></ListItemIcon>
          <ListItemText primary="Edit Product" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products/delete">
          <ListItemIcon><Delete /></ListItemIcon>
          <ListItemText primary="Delete Product" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default AdminSidebar;

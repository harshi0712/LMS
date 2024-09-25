// frontend/src/components/admin/Dashboard.tsx

import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useRouter } from 'next/router';

const AdminDashboard: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Administrator Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">Manage Users</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/user')}>
              Go to User Management
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">Manage Courses</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/course')}>
              Go to Course Management
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">System Settings</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/admin/settings')}>
              Go to Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;

// frontend/src/components/student/Dashboard.tsx

import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useRouter } from 'next/router';

const StudentDashboard: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Student Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">Enroll in Courses</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/student/courses')}>
              Browse and Enroll
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">My Progress</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/student/progress')}>
              View Progress
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h5">Assignments</Typography>
            <Button variant="contained" color="primary" onClick={() => handleNavigation('/student/assignments')}>
              Submit and View Assignments
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;

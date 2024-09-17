import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { Theme, useTheme } from '@mui/material/styles';

const InstructorDashboard: React.FC = () => {
  const router = useRouter();
  const theme = useTheme(); // Hook to access the theme

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container sx={{ padding: theme.spacing(3) }}>
      <Typography variant="h2" align="center" gutterBottom>
        Instructor Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), textAlign: 'center', height: '100%', boxShadow: theme.shadows[3] }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: theme.spacing(1) }}>
                Manage Courses
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/courses')}
              >
                Go to Course Management
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/create-course')}
              >
                Create New Course
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/update-course')}
              >
                Update Course
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), textAlign: 'center', height: '100%', boxShadow: theme.shadows[3] }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: theme.spacing(1) }}>
                Assessments
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/assessments')}
              >
                Go to Assessments
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/design-assessment')}
              >
                Design New Assessment
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), textAlign: 'center', height: '100%', boxShadow: theme.shadows[3] }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: theme.spacing(1) }}>
                Grades & Assignments
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/grades')}
              >
                Grade Assignments
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/assignments')}
              >
                Manage Assignments
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), textAlign: 'center', height: '100%', boxShadow: theme.shadows[3] }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: theme.spacing(1) }}>
                Track Progress
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/progress')}
              >
                View Progress Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2), textAlign: 'center', height: '100%', boxShadow: theme.shadows[3] }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontSize: '1.5rem', marginBottom: theme.spacing(1) }}>
                Communicate with Students
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: theme.spacing(2) }}
                onClick={() => handleNavigation('/instructor/communication')}
              >
                Send Messages
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstructorDashboard;

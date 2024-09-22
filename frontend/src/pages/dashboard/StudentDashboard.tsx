import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, CardActions, Collapse, IconButton, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StudentDashboard: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<boolean[]>(Array(3).fill(false));

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const textColor = '#004d40'; // Define a uniform text color

  return (
    <Container sx={{ padding: theme.spacing(3) }}>
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#00796b',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: theme.spacing(4),
        }}
      >
        Student Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Enroll in Courses Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#e0f7fa' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://wisdmlabs.com/wp-content/uploads/2019/04/learndash-enrollment-3.png" 
            
              alt="Enroll in Courses"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Enroll in Courses
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(0)} aria-expanded={expanded[0]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/course')}>
                  Browse and Enroll
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* My Progress Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#fff3e0' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EJOkQgv5OZsmVBV-mAAz2vGHJT2gAMVQQA&s" 
              alt="My Progress"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                My Progress
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(1)} aria-expanded={expanded[1]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/student/progress')}>
                  View Progress
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Assignments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#e1bee7' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1404329998/vector/annual-school-report-card.jpg?s=612x612&w=0&k=20&c=_cB5Hxd0-bIolLGMKeL8y98Sk8R7SD_5sp2iQzSz7lE=" 
              alt="Assignments"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Assignments
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(2)} aria-expanded={expanded[2]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/student/assignments')}>
                  Submit and View Assignments
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;

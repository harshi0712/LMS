import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, CardActions, Collapse, IconButton, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InstructorDashboard: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<boolean[]>(Array(5).fill(false));

  const handleExpandClick = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const textColor = '#004d40';
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
        Instructor Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Manage Courses Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#e0f7fa' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.symphonyx.in/fetch/2/01/100/blobid1621254119322.svg" 
              alt="Manage Courses"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Manage Courses
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(0)} aria-expanded={expanded[0]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/instructor/courses')}>
                  Go to Course Management
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleNavigation('/instructor/create-course')}>
                  Create New Course
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleNavigation('/instructor/update-course')}>
                  Update Course
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Assessments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#fff3e0' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.teachervision.com/sites/default/files/styles/scale600w/public/2020-11/report-card-comments-feat-image.png?itok=nuVWeXlo476157" 
              alt="Assessments"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Assessments
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(1)} aria-expanded={expanded[1]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/instructor/assessments')}>
                  Go to Assessments
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleNavigation('/instructor/design-assessment')}>
                  Design New Assessment
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Grades & Assignments Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#e1bee7' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1404329998/vector/annual-school-report-card.jpg?s=612x612&w=0&k=20&c=_cB5Hxd0-bIolLGMKeL8y98Sk8R7SD_5sp2iQzSz7lE=" 
              alt="Grades & Assignments"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Grades & Assignments
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(2)} aria-expanded={expanded[2]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/instructor/grades')}>
                  Grade Assignments
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleNavigation('/instructor/assignments')}>
                  Manage Assignments
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Track Progress Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#ffe0b2' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTa8d5paog8U_x6NlieTPG1cqG1CyUXTZRaA&s" 
              alt="Track Progress"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Track Progress
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(3)} aria-expanded={expanded[3]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/instructor/progress')}>
                  View Progress Reports
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        {/* Communicate with Students Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: '100%', bgcolor: '#c8e6c9' }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.targetfirst.com/wp-content/uploads/2021/03/clictochat-e1620817319308.png" 
              alt="Communicate with Students"
            />
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: theme.spacing(1), color: textColor }}>
                Communicate with Students
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={() => handleExpandClick(4)} aria-expanded={expanded[4]} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded[4]} timeout="auto" unmountOnExit>
              <CardContent>
                <Button variant="contained" color="primary" onClick={() => handleNavigation('/instructor/communication')}>
                  Send Messages
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstructorDashboard;


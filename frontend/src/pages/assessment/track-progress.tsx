
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

// Sample data for the progress tracker
const data = [
  { subject: 'Java', progress: 80 },
  { subject: 'React', progress: 70 },
  { subject: 'HTML', progress: 90 },
  { subject: 'CSS', progress: 85 },
  { subject: 'Web Technology', progress: 75 },
];

const ProgressTracker = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        padding: '20px'
      }}
    >
      <Paper style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Subject Progress Tracker
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="progress" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default ProgressTracker;

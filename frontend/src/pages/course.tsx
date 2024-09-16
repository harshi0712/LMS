

// pages/index.tsx
import React from 'react';
import CardGrid from '../components/courseCard';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled component using MUI's `styled` function
const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2.5rem', // Adjust the size as needed
  fontWeight: 'bold',
  color: '#001f3f', // Navy blue color
  marginTop: theme.spacing(4), // Top margin
  marginBottom: theme.spacing(4), // Bottom margin
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Optional: add a shadow for better readability
}));

const Home: React.FC = () => {
  return (
    <Container>
      <StyledHeader variant="h1">All Course Study Material</StyledHeader>
      <CardGrid />
    </Container>
  );
};

export default Home;

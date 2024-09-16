

///home page 
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const HeroSection: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/student-using-laptop-studying-desk_1262-21429.jpg?w=1380&t=st=1726488632~exp=1726489232~hmac=24fe1e5cf0049de0e5399f0788c52e0da17f5e3f5e428c9f264d32ce370a4df7")',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    
  };

  return (
    <div style={backgroundStyle}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
          padding: 0,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Typography variant="h2" align="center" style={{ fontFamily: 'cursive', color: 'black' }}>
            Welcome to the learning platform
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;

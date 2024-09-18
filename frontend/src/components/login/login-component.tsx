import { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      console.log(process.env.NEXT_PUBLIC_LOGIN);
      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_LOGIN}`, {
        email,
        password,
      });

      console.log(response.data);
      const { token, role } = response.data;

      // Store token in localStorage or context
      localStorage.setItem('token', token);

      // Redirect based on user role
      if (role === 'instructor') {
        router.push('/InstructorDashboard');
      } else if (role === 'student') {
        router.push('/StudentDashboard');
      } else {
        alert('Unknown role, please contact support.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to log in. Please try again.');
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            width: '100%',
            maxWidth: 1200,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1312078106/vector/learning-management-system-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=0cOJTatzgR0QMFevBrgjp-lLMLZoLUojmYFcoI25B9w="
              alt="Learning Management System"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 3,
              marginTop: 5,
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ color: 'primary.main' }}
            >
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
              <Link href="/signup" passHref>
                <Button variant="text" color="secondary">
                  Don't have an account? Sign Up
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginComponent;

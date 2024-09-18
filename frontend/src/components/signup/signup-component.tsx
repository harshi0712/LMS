import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import useRouter
import Link from 'next/link'; // Import Link

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const router = useRouter(); // Initialize router

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SIGN_UP}`, {
        username,
        email,
        password,
        role,
      });

      console.log(response.data);
      alert("Sign up successfully...");

      // Redirect to login page after successful signup
      router.push('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      alert("Failed to sign up. Please try again.");
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
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          width: '100%',
          maxWidth: 1200,
        }}>
          {/* Image Box */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
            <img src="https://gloriumtech.com/wp-content/uploads/2022/11/Learning-Management-System-development.jpg" alt="Learning Management System" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>

          {/* Form Box */}
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
          }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'primary.main' }}>
              Sign Up
            </Typography>
            <TextField label="Username" variant="outlined" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormControl fullWidth margin="normal">
              <InputLabel>Role</InputLabel>
              <Select value={role} onChange={(e) => setRole(e.target.value)} label="Role">
                <MenuItem value="instructor">Instructor</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ marginTop: 2 }}>
              Sign Up
            </Button>
            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
              <Link href="/login" passHref>
                <Button variant="text" color="secondary">Already have an account? Login</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupComponent;

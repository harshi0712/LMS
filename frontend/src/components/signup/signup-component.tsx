

import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';


const SignupComponent =() =>{
    const handleSubmit=()=>{
        console.log(process.env.NEXT_PUBLIC_SIGN_UP);
        axios.post(`${process.env.NEXT_PUBLIC_SIGN_UP}`,).then(result=>{
            console.log(result);
            alert("Sign up succefully...")
        }).catch(err=>{
            console.log(err)
        });
    }
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ marginTop: 2 }}>
          Sign Up
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Link href="/login" passHref>
            <Button variant="text" color="secondary">
              Already have an account? Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignupComponent;
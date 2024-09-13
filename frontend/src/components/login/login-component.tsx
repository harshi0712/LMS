{/*const LoginComponent  = () =>{
    return (
        <>
        <h1>Login </h1>
        </>
    )
}
export default LoginComponent; */}




import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Link from 'next/link';

const LoginComponent =() => {
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
          Login
        </Typography>
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
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Login
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Link href="/signup" passHref>
            <Button variant="text" color="secondary">
              Don't have an account? Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginComponent;
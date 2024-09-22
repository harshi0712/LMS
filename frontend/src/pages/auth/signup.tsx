import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Typography, TextField, Button, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { registerAPI } from '../../service/auth';
import Swal from 'sweetalert2';

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

const SignupComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();
  const router = useRouter();

  const onSubmit = async (data: SignupFormData) => {
    const reqData = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    registerAPI(reqData, (res: any) => {
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Registration successful",
        });
        router.push('/login'); // Redirect after successful registration
      } else {
        Swal.fire({
          icon: "error",
          title: res?.data?.error || "Registration failed",
        });
      }
    });
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
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("username", { required: "Username is required" })}
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Role</InputLabel>
                <Select {...register("role", { required: "Role is required" })} error={!!errors.role}>
                  <MenuItem value="instructor">Instructor</MenuItem>
                  <MenuItem value="student">Student</MenuItem>
                </Select>
                {errors.role && <span style={{ color: 'red' }}>{errors.role.message}</span>}
              </FormControl>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                Sign Up
              </Button>
            </form>
            <Box sx={{ marginTop: 2, textAlign: 'center' }}>
              <Link href="/auth/login" passHref>
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

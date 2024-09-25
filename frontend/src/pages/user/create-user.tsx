import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select, CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { createUser } from '../../service/user'; // Adjust the import path according to your structure

interface CreateUserFormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

const CreateUserForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateUserFormData>();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: CreateUserFormData) => {
    setLoading(true);

    try {
      const response = await createUser(data);  // Use the createUser function from the service

      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'User created successfully!',
        });
        reset();  // Reset the form fields after successful submission
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error creating user',
        text: error.response?.data?.message || 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Create User
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ""}
        />
        <TextField
          label="Email"
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
          fullWidth
          margin="normal"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <FormControl fullWidth margin="normal" error={!!errors.role}>
          <InputLabel>Role</InputLabel>
          <Select
            defaultValue="" // Ensure this is an empty string
            {...register("role", { required: "Role is required" })}
          >
            <MenuItem value="">
              <em>Select a role</em> {/* This is the placeholder */}
            </MenuItem>
            <MenuItem value="instructor">Instructor</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
          {errors.role && <span style={{ color: 'red' }}>{errors.role.message}</span>}
        </FormControl>
        <Box sx={{ position: 'relative', marginTop: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? 'Submitting...' : 'Create User'}
          </Button>
          {loading && <CircularProgress size={24} sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }} />}
        </Box>
      </Box>
    </Container>
  );
};

export default CreateUserForm;

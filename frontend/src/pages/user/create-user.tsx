// import React from "react";

// const CreateUsert = () => {
//     return (
//         <div>
//             Create User Form 
//         </div>
//     );
// };

// export default CreateUsert;


import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, TextField, Button, Typography, Box, MenuItem, FormControl, InputLabel, Select, CircularProgress } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

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
      const response = await axios.post('/api/users', data);  // Adjust API endpoint if necessary

      if (response.status === 201) {
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
        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            defaultValue=""
            {...register("role", { required: "Role is required" })}
            error={!!errors.role}
          >
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

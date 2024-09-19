import * as React from 'react';
import { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define validation schema with Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  course: yup.string().required('Course selection is required'),
});

// Define types for form data
interface FormData {
  name: string;
  email: string;
  course: string;
}

// Define the EnrollmentForm component
const EnrollmentForm: React.FC = () => {
  const [courses, setCourses] = useState<string[]>(['Course 1', 'Course 2', 'Course 3']); // Example courses

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // You can handle form submission here, e.g., sending data to an API
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Enrollment Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Course</InputLabel>
          <Controller
            name="course"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                label="Course"
                error={!!errors.course}
              >
                {courses.map((course, index) => (
                  <MenuItem key={index} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.course && <Typography color="error">{errors.course.message}</Typography>}
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: 16 }}
        >
          Enroll
        </Button>
      </form>
    </Container>
  );
};

export default EnrollmentForm;

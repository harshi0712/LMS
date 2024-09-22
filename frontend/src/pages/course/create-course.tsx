import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createNewCourse, fetchCourseById, updateExistingCourse } from '../../service/course'; // Adjust the path accordingly
import Swal from 'sweetalert2';

interface IFormInput {
  title: string;
  description: string;
  courseImage?: string; // Assuming this is a URL string or file
  link?: string;
}

const CreateUpdateCourse: React.FC<{ courseId?: string | null | undefined}> = ({ courseId }) => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();
  const router = useRouter();

  useEffect(() => {
    if (courseId) {
      const loadCourse = async () => {
        const courseData = await fetchCourseById(courseId);
        if (courseData) {
          // Set form values for editing
          setValue('title', courseData.title);
          setValue('description', courseData.description);
          setValue('courseImage', courseData.courseImage);
          setValue('link', courseData.link);
        }
      };
      loadCourse();
    }
  }, [courseId, setValue]);

  const onSubmit = async (data: IFormInput) => {
    
    try {
      let result: any;
      if (courseId) {
        // Update existing course
        result = await updateExistingCourse(courseId, data);
        if (result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Course updated successfully",
          });
          router.push('/course'); // Navigate back to course list after creation or update
        }
      } else {
        // Create new course
        result = await createNewCourse(data);
        if (result.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Course created successfully",
          });
          router.push('/course'); // Navigate back to course list after creation or update
        }
      }
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        {courseId ? 'Update Course' : 'Create New Course'}
      </Typography>

      {/* Form with React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Title Field */}
        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{ required: 'Title is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              fullWidth
              margin="normal"
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ''}
            />
          )}
        />

        {/* Description Field */}
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{ required: 'Description is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              fullWidth
              margin="normal"
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ''}
            />
          )}
        />

        {/* Course Image Field (optional) */}
        <Controller
          name="courseImage"
          control={control}
          defaultValue=""
          rules={{ required: 'Image URL is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Course Image URL"
              fullWidth
              margin="normal"
              error={!!errors.courseImage}
              helperText={errors.courseImage ? errors.courseImage.message : ''}
            />
          )}
        />

        {/* Link Field (optional) */}
        <Controller
          name="link"
          control={control}
          defaultValue=""
          rules={{ required: 'Video URL is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Course Link"
              fullWidth
              margin="normal"
              error={!!errors.link}
              helperText={errors.link ? errors.link.message : ''}
            />
          )}
        />

        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {courseId ? 'Update Course' : 'Create Course'}
        </Button>
      </form>
    </Box>
  );
};

export default CreateUpdateCourse;

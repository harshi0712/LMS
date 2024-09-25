import React, { useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createNewCourse, fetchCourseById, updateExistingCourse } from '../../service/course';
import Swal from 'sweetalert2';

interface IFormInput {
  title: string;
  description: string;
  courseImage?: string;
  link?: string;
}

const CreateUpdateCourse: React.FC<{ courseId?: string | null | undefined }> = ({ courseId }) => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>();
  const router = useRouter();

  useEffect(() => {
    if (courseId) {
      const loadCourse = async () => {
        const courseData = await fetchCourseById(courseId);
        if (courseData) {
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
        result = await updateExistingCourse(courseId, data);
        if (result.status === 200) {
          Swal.fire({ icon: "success", title: "Course updated successfully" });
          router.push('/course');
        }
      } else {
        result = await createNewCourse(data);
        if (result.status === 201) {
          Swal.fire({ icon: "success", title: "Course created successfully" });
          router.push('/course');
        }
      }
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  return (
    <Box 
      sx={{ 
        maxWidth: 400, // Further reduced max width for smaller form
        height: 'auto', 
        margin: '0 auto', 
        marginTop: 4,
        padding: 3, // Reduced padding
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Lighter shadow
        backgroundColor: '#fff' 
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom 
        align="center" 
        sx={{ 
          fontWeight: 'bold', 
          color: 'primary.main' 
        }}
      >
        {courseId ? 'Update Course' : 'Create New Course'}
      </Typography>

      <img 
        src="https://www.kindpng.com/picc/m/748-7485082_online-course-wordpress-theme-hd-png-download.png" 
        alt="Course Image" 
        style={{ width: '100%', marginBottom: 16 }} 
      />

      <form onSubmit={handleSubmit(onSubmit)}>
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
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title ? errors.title.message : ''}
              InputProps={{ style: { height: '56px' } }} 
            />
          )}
        />

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
              variant="outlined"
              multiline
              rows={3} // Reduced rows for a smaller height
              error={!!errors.description}
              helperText={errors.description ? errors.description.message : ''}
              InputProps={{ style: { height: '90px' } }} // Adjust height
            />
          )}
        />

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
              variant="outlined"
              error={!!errors.courseImage}
              helperText={errors.courseImage ? errors.courseImage.message : ''}
              InputProps={{ style: { height: '56px' } }} 
            />
          )}
        />

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
              variant="outlined"
              error={!!errors.link}
              helperText={errors.link ? errors.link.message : ''}
              InputProps={{ style: { height: '56px' } }} 
            />
          )}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          {courseId ? 'Update Course' : 'Create Course'}
        </Button>
      </form>
    </Box>
  );
};

export default CreateUpdateCourse;





//ASSISSMENT LIST 


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import axios from 'axios';

const assissmentList = () => {
  const [assessments, setAssessments] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      const response = await axios.get('/api/assessments');
      setAssessments(response.data);
    } catch (error) {
      console.error('Error fetching assessments:', error);
    }
  };

  const handleDelete = async (id: number) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    const result = await swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/api/assessments/${id}`);
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        fetchAssessments();
      } catch (error) {
        console.error('Error deleting assessment:', error);
        swalWithBootstrapButtons.fire('Error!', 'Failed to delete the assessment.', 'error');
      }
    }
  };

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button variant="contained" color="primary" onClick={() => router.push('/create-assessment')}>
            Create Assessment
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assessments.map((assessment) => (
                <TableRow key={assessment.id}>
                  <TableCell>{assessment.title}</TableCell>
                  <TableCell>{assessment.description}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => router.push(`/update-assessment/${assessment.id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(assessment.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => router.push(`/view-assessment/${assessment.id}`)}>
                      <HowToVoteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default assissmentList;

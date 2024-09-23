// import React from "react";

// const ViewUser = () => {
//     return (
//         <div>
//             View user details 
//         </div>
//     );
// };

// export default ViewUser;


import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';

interface UserDetail {
  id: number;
  username: string;
  email: string;
  role: string;
}

const UserDetailView: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the user ID from the URL query params
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      fetchUserDetails(id as string);
    }
  }, [id]);

  const fetchUserDetails = async (userId: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/users/${userId}`);  // Adjust the API endpoint as needed
      setUser(response.data);
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error fetching user details',
        text: error.response?.data?.message || 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <Typography variant="h6" component="h1" align="center" sx={{ marginTop: 4 }}>
          User not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        User Details
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Username"
          value={user.username}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Email"
          value={user.email}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Role"
          value={user.role}
          fullWidth
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={() => router.push('/users')}>
            Back to Users List
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserDetailView;

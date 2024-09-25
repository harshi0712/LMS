import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, TextField, Button, Box, CircularProgress } from '@mui/material';
import Swal from 'sweetalert2';
import { useSearchParams } from 'next/navigation';
import { fetchUserById } from '../../service/user';

// Define types for user data
interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  role: string;
}

const UserDetailView: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    if (id) {
      fetchUserDetails(id as string);
    }
  }, [id]);

  const fetchUserDetails = async (userId: string) => {
    setLoading(true);
    try {
      const fetchedUsers = await fetchUserById(userId);
      setUser(fetchedUsers as User);
    } catch (error) {} finally {
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
          disabled
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Email"
          value={user.email}
          fullWidth
          margin="normal"
          disabled
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Role"
          value={user.role}
          fullWidth
          margin="normal"
          disabled
          InputProps={{
            readOnly: true,
          }}
        />
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={() => router.push('/user')}>
            Back to Users List
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserDetailView;

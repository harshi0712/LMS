import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Tabs,
  Tab,
  Button,
  Pagination,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';  
import { fetchAllUsers, deleteUser } from '../../service/user';
import Swal from 'sweetalert2'; 

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  
}

const UserListPage: React.FC = () => {
  const router = useRouter();  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [search, setSearch] = useState<string>(''); // Track search input

  const fetchUsers = async (page: number, search: string) => {
    setLoading(true);
    try {
      const fetchedUsers = await fetchAllUsers(page, 10, search); // Pass search term
      setUsers(fetchedUsers.users as User[]);
      setTotalPages(fetchedUsers.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page, search); // Fetch users when the page or search term changes
  }, [page, search]);

  const handleViewUser = (id: number) => {
    router.push(`/user/view-user?id=${id}`);  
  };

  const handleDeleteUser = async (id: number) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await deleteUser(id);
        fetchUsers(page, search); // Refresh the user list
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire({ icon: 'error', title: 'Error!', text: 'Failed to delete user.' });
      }
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Container>
    );
  }

  const instructors = users.filter(user => user.role === 'instructor');
  const students = users.filter(user => user.role === 'student');

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">User Listing</Typography>
      <Button variant="contained" color="primary" onClick={() => router.push('/user/create-user')}>Create User</Button>
      <TextField 
        label="Search Users" 
        variant="outlined" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        sx={{ marginTop: 6 }} 
      />
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} centered>
        <Tab label="Instructors" />
        <Tab label="Students" />
      </Tabs>
      {value === 0 && (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instructors.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleViewUser(user.id)}>View</Button>
                    <Button onClick={() => handleDeleteUser(user.id)} color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {value === 1 && (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleViewUser(user.id)}>View</Button>
                    <Button onClick={() => handleDeleteUser(user.id)} color="error">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
        variant="outlined"
        shape="rounded"
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default UserListPage;

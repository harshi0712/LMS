import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, ListItemIcon } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'; // Import Link from Next.js
import { useRouter } from "next/router";

// Define the type for navigation options
interface Option {
  name: string;
  url: string;
}

const ButtonAppBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const adminOptions: Option[] = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'User Management', url: '/user' },
    { name: 'Students', url: '/student' },
    { name: 'Courses', url: '/course' },
    { name: 'Setting', url: '/setting' },
  ];

  const instructorOptions: Option[] = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Students', url: '/student' },
    { name: 'Courses', url: '/course' },
    { name: 'Setting', url: '/setting' },
  ];

  const studentOptions: Option[] = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Courses', url: '/course' },
    { name: 'Setting', url: '/setting' },
  ];

  const { isAuthenticated, role } = useAuth();
  const [optionList, setOptionList] = useState<Option[]>([]); // Update state type to Option[]

  useEffect(() => {
    if (role === 'admin') {
      setOptionList(adminOptions);
    } else if (role === 'instructor') {
      setOptionList(instructorOptions);
    } else if (role === 'student') {
      setOptionList(studentOptions);
    }
  }, [role,isAuthenticated]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {optionList.map((option, index) => (
          <ListItem key={option.name} disablePadding>
            <ListItemButton component={Link} href={option.url} passHref>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleLogout = () => {
    localStorage.clear()
    router.push('/auth/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {isAuthenticated ? 
            <Button color="inherit"  onClick={handleLogout}>Logout</Button> : 
            <Button color="inherit" onClick={() => router.push('/auth/login')}>Login</Button>
          }
        </Toolbar>
      </AppBar>
      {isAuthenticated && <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>}
    </Box>
  );
};

export default ButtonAppBar;

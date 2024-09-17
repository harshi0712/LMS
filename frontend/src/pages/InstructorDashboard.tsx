import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type { Navigation, Router } from '@toolpad/core';
import InstructorDashboard from '../components/Instructor/Dashboard';
import AdminDashboard from '../components/Admin/Dashboard';
import StudentDashboard from '../components/Student/Dashboard';

// Define new navigation items
const NAVIGATION: Navigation = [
  {
    segment: 'instructor-dashboard',
    title: 'Instructor Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'admin-dashboard',
    title: 'Admin Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'student-dashboard',
    title: 'Student Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Render dashboard content based on pathname
function DemoPageContent({ pathname }: { pathname: string }) {
  switch (pathname) {
    case '/instructor-dashboard':
      return <InstructorDashboard />;
    case '/admin-dashboard':
      return <AdminDashboard />;
    case '/student-dashboard':
      return <StudentDashboard />;
    default:
      return (
        <Box
          sx={{
            py: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography>Dashboard content for {pathname}</Typography>
        </Box>
      );
  }
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBranding(props: DemoProps) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/instructor-dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      session={null} // You can set the session state as needed
      authentication={{
        signIn: () => {},
        signOut: () => {},
      }}
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="" />,
        title: 'MUI',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

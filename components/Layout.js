// components/Layout.js
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Campaign Manager
          </Typography>
          {user ? (
            <>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Link href="/login" passHref>
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
      <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid #ddd' }}>
        <Typography variant="body2">© 2024 JamLoop</Typography>
      </footer>
    </>
  );
};

export default Layout;

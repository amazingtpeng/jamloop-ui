import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <Layout>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;

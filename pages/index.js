import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, TextField, Box } from '@mui/material';

export default function Home() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
}

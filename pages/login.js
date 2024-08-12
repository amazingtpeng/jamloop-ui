// pages/login.js
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { TextField, Button } from '@mui/material';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = (data) => {
    try {
      login(data.username, data.password);
      router.push('/campaigns');
    } catch (err) {
      console.error(err);
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('username')} label="Username" fullWidth margin="normal" />
        <TextField {...register('password')} label="Password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;

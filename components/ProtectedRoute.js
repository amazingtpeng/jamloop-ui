import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  console.log("Protected", user)

  useEffect(() => {
    // Ensure this code only runs client-side
    setTimeout(() => {  
      if (!user) {
        router.push('/login');
      }
    }, 500);
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRoute;

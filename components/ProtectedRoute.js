import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  console.log("Protected", user)

  useEffect(() => {
    // Ensure this code only runs client-side
    if (user === undefined) {
      router.push('/login');
    }
  }, [user, router]);

  // Render children only if user is present
  if (!user) {
    return null; // Or return a loading spinner, etc.
  }

  return <>{children}</>;
};

export default ProtectedRoute;

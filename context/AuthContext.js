import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if there's a user session stored in localStorage
    const storedUser = localStorage.getItem('user');
    console.log("Stored", storedUser)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    // Perform authentication here, and if successful:
    if (username === 'user1' && password === 'password1') {
      setUser({ username: 'user1' });
    } else if (username === 'user2' && password === 'password2') {
      setUser({ username: 'user2' });
    } else {
      throw new Error('Invalid credentials');
    }
    const loggedInUser = { username }; // Simplified for this example
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user session in localStorage
    router.push('/campaigns'); // Redirect after login
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear the session
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

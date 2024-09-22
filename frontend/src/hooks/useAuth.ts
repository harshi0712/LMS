import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // This block will only run on the client side
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Assuming you store role in localStorage

    setToken(token);
    setIsAuthenticated(Boolean(token));
    setRole(role);
  }, []);

  return { isAuthenticated, role, token };
};

export default useAuth;

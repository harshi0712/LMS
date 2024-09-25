// import "./styles/globals.css";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
import Header from '../components/header';

export default function App({ Component, pageProps }: AppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(Boolean(token));
  }, []);

  useEffect(() => {
    // Redirect based on authentication status
    const publicRoutes = ['/auth/signup', '/auth/login']; // Add public routes here
    const protectedRoutes = ['/dashboard', '/assessment', '/chatbot', '/user', '/course']; // Protected route prefixes
    const { pathname } = router;

    // Check if the path starts with any of the protected route prefixes
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    if (isProtectedRoute && !isAuthenticated) {
      // If trying to access a protected route without being authenticated
      router.push('/auth/login'); // Redirect to login
    } else if (publicRoutes.includes(pathname) && isAuthenticated) {
      // If trying to access a public route while authenticated
      router.push('/dashboard'); // Redirect to dashboard
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

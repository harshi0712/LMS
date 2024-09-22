// import "./styles/globals.css";
import React, { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Header from '../components/header'

export default function App({ Component, pageProps }: AppProps) {

    // Ensure localStorage is only used in the client
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // This block will only run on the client side
    const token = localStorage.getItem('token');
    setIsAuthenticated(Boolean(token));
  }, [isAuthenticated]);


  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  )

}

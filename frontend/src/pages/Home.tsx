

import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - learning managment System</title>
        <meta name="description" content=" Welcome to the learning platform" />
      </Head>
      <HeroSection />
    </>
  );
};

export default Home;

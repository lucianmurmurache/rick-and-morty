import React from 'react';

import { Navbar, Footer } from '../components/index';

import background from '../assets/rick&morty.gif';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='h-2/4'>
        <img
          src={background}
          alt='Rick and Morty'
          className='w-screen'
          width='100%'
          height='100%'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

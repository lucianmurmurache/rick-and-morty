import React from 'react';

import background from '../assets/rick&morty.gif';

const Home = () => {
  return (
    <>
      <main className='h-2/4'>
        <img
          src={background}
          alt='Rick and Morty'
          className='w-screen'
          width='100%'
          height='100%'
        />
      </main>
    </>
  );
};

export default Home;

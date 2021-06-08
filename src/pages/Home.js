import React from 'react';

import { Navbar, Footer } from '../components/index';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-full'>
        <div className='my-12'>
          <p>Content</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';

import { Navbar, Footer } from '../components';

const EpisodesComponent = React.lazy(() => import('../components/Episodes.js'));

const Episodes = () => {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <EpisodesComponent />
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default Episodes;

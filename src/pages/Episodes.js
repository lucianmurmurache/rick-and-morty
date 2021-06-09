import React, { Suspense } from 'react';

import { Navbar, Footer } from '../components';

const EpisodesComponent = React.lazy(() => import('../components/Episodes.js'));

const Episodes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <EpisodesComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default Episodes;

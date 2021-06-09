import React, { Suspense } from 'react';

import { Navbar, Footer } from '../components';

const LocationsComponent = React.lazy(() =>
  import('../components/Locations.js'),
);

const Locations = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LocationsComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default Locations;

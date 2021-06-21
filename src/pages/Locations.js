import React from 'react';

import { Navbar, Footer } from '../components';

const LocationsComponent = React.lazy(() =>
  import('../components/Locations.js'),
);

const Locations = () => {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <LocationsComponent />
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default Locations;

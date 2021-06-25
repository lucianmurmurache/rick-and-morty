import React from 'react';

const LocationsComponent = React.lazy(() =>
  import('../components/Locations.js'),
);

const Locations = () => {
  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <LocationsComponent />
      </React.Suspense>
    </>
  );
};

export default Locations;

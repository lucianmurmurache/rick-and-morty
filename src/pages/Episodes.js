import React from 'react';

const EpisodesComponent = React.lazy(() => import('../components/Episodes.js'));

const Episodes = () => {
  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <EpisodesComponent />
      </React.Suspense>
    </>
  );
};

export default Episodes;

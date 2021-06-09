import React, { Suspense } from 'react';

import { Navbar, Footer } from '../components';

const CharactersComponent = React.lazy(() =>
  import('../components/Characters.js'),
);

const Characters = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <CharactersComponent />
      </Suspense>
      <Footer />
    </>
  );
};

export default Characters;

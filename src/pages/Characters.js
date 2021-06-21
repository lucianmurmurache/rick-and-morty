import React from 'react';

import { Navbar, Footer } from '../components';

const CharactersComponent = React.lazy(() =>
  import('../components/Characters.js'),
);

const Characters = () => {
  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<div>Loading...</div>}>
        <CharactersComponent />
      </React.Suspense>
      <Footer />
    </div>
  );
};

export default Characters;

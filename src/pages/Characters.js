import React from 'react';

const CharactersComponent = React.lazy(() =>
  import('../components/Characters.js'),
);

const Characters = () => {
  return (
    <>
      <React.Suspense fallback={<p>Loading...</p>}>
        <CharactersComponent />
      </React.Suspense>
    </>
  );
};

export default Characters;

import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/api';

const Characters = () => {
  const [characters, setCharcters] = useState([]);

  useEffect(() => {
    getCharacters().then((resolve) => setCharcters(resolve.results));
  }, []);

  return (
    <div className='dark:bg-gray-900'>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5'>
        {characters.map((char) => (
          <li key={char.id} className='px-3 mb-12 lg:mb-6'>
            <img
              src={char.image}
              alt={char.name}
              className='shadow-lg w-full mb-3 rounded-3xl transition-all duration-300 transform translate-y-0 hover:shadow-2xl hover:-translate-y-1'
            />
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Name: {char.name}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Gender: {char.gender}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Status: {char.status}
            </p>
            {char.type && (
              <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
                Type: {char.type}
              </p>
            )}
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Species: {char.species}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Last known location: {char.location.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;

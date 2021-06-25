import React, { useEffect, useState } from 'react';

import { getCharacters } from '../api/api';

import { Paginate } from './index';

import { BiHappy, BiMeh, BiSad } from 'react-icons/bi';

const Characters = () => {
  const [characters, setCharcters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    pageNumber >= 34 ? setPageNumber(34) : setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getCharacters(pageNumber).then((resolve) => setCharcters(resolve.results));
    document.title = 'Characters';
    window.scrollTo(0, 0);
  }, [pageNumber]);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className='dark:bg-gray-900'>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {characters.map((char) => (
          <li key={char.id} className='px-3 mb-12 lg:mb-6'>
            <img
              src={char.image}
              alt={char.name}
              className='shadow-lg w-full my-2 rounded-2xl will-change-transform transition-all duration-500 transform translate-y-0 hover:shadow-2xl hover:-translate-y-1'
            />
            <p className='text-xl sm:text-lx text-gray-900 dark:text-white'>
              {char.name}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              {char.status === 'Alive' ? (
                <BiHappy
                  aria-label='Status: Alive'
                  className='h-5 w-5 fill-current text-green-600 inline-block'
                />
              ) : char.status === 'unknown' ? (
                <BiMeh
                  aria-label='Status: Unknown'
                  className='h-5 w-5 fill-current text-yellow-600 inline-block'
                />
              ) : (
                <BiSad
                  aria-label='Status: Dead'
                  className='h-5 w-5 fill-current text-red-600 inline-block'
                />
              )}{' '}
              {Capitalize(char.status)} - {char.type || char.species}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Origin: {Capitalize(char.origin.name)}
            </p>
            <p className='text-md sm:text-lx text-gray-900 dark:text-white'>
              Last known location: {char.location.name}
            </p>
          </li>
        ))}
      </ul>
      <Paginate handleNext={handleNext} handlePrevious={handlePrevious} />
    </div>
  );
};

export default Characters;

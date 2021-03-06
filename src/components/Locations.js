import React, { useEffect, useState } from 'react';
import { getLocations } from '../api/api';

import { Paginate } from './index';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevious = () => {
    pageNumber <= 1 ? setPageNumber(1) : setPageNumber(pageNumber - 1);
  };

  const handleNext = () => {
    pageNumber >= 6 ? setPageNumber(6) : setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    getLocations(pageNumber).then((resolve) => setLocations(resolve.results));
    document.title = 'Locations';
    window.scrollTo(0, 0);
  }, [pageNumber]);

  return (
    <div className='flex flex-col dark:bg-gray-900'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-500'>
              <thead className='bg-gray-50 dark:bg-gray-900'>
                <tr>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Type
                  </th>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Dimension
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-500'>
                {locations.map((location) => (
                  <tr key={location.id}>
                    <td className='px-6 py-4 whitespace-nowrap dark:bg-gray-900'>
                      <div className='flex items-center text-sm font-medium text-gray-900 dark:text-white'>
                        {location.name}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap dark:bg-gray-900 text-sm text-gray-900 dark:text-white'>
                      {location.type}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white dark:bg-gray-900'>
                      {location.dimension}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Paginate handleNext={handleNext} handlePrevious={handlePrevious} />
        </div>
      </div>
    </div>
  );
};

export default Locations;

import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../api/api';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes().then((resolve) => setEpisodes(resolve.results));
  }, []);
  return (
    <div className='flex flex-col dark:bg-gray-900'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50 dark:bg-gray-900'>
                <tr>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Air date
                  </th>
                  <th className='px-6 py-3 text-left font-medium text-gray-500 dark:text-white uppercase tracking-wider'>
                    Episode
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {episodes.map((episode) => (
                  <tr key={episode.id}>
                    <td className='px-6 py-4 whitespace-nowrap dark:bg-gray-900'>
                      <div className='flex items-center text-sm font-medium text-gray-900 dark:text-white'>
                        {episode.name}
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap dark:bg-gray-900 text-sm text-gray-900 dark:text-white'>
                      {episode.air_date}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white dark:bg-gray-900'>
                      {episode.episode}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

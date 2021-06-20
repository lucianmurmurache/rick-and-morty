import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Paginate = ({ handlePrevious, handleNext }) => {
  return (
    <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-600 sm:px-6 dark:bg-gray-900 dark:text-white'>
      <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-evenly'>
        <div>
          <nav
            className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
            aria-label='Pagination'
          >
            <button
              onClick={handlePrevious}
              className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-900 dark:text-white'
            >
              <span className='sr-only'>Previous</span>
              <FiChevronLeft
                className='h-5 w-5'
                role='img'
                aria-label='Previous page'
              />
            </button>

            <button
              onClick={handleNext}
              className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-500 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-900 dark:text-white'
            >
              <span className='sr-only'>Next</span>
              <FiChevronRight
                className='h-5 w-5'
                role='img'
                aria-label='Next page'
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginate;

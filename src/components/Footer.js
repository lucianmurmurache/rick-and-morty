const Footer = () => {
  return (
    <>
      <footer id='footer' className='relative dark:bg-gray-900'>
        <div className='border-t border-gray-200 dark:border-gray-700 py-16'>
          <div className='max-w-7xl mx-auto container px-4 xl:px-12 2xl:px-4'>
            <div className='lg:flex'>
              <div className='w-full lg:w-1/2 mb-16 lg:mb-0 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <a
                        rel='external noreferrer noopener nofollow'
                        href='https://rickandmortyapi.com'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        API
                      </a>
                    </li>
                    <li className='mt-6'>
                      <a
                        rel='external noreferrer noopener nofollow'
                        href='https://github.com/lucianmurmurache/rick-and-morty'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Github repository
                      </a>
                    </li>
                    <li className='mt-6'>
                      <a
                        rel='external noreferrer noopener nofollow'
                        href='https://rickandmortyapi.com/documentation'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <a
                        href='/'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Characters
                      </a>
                    </li>
                    <li className='mt-6'>
                      <a
                        href='/'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Locations
                      </a>
                    </li>
                    <li className='mt-6'>
                      <a
                        href='/'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Episodes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full lg:w-1/2 flex'>
                <div className='w-full lg:w-1/2 px-6'>
                  <ul>
                    <li>
                      <a
                        href='/privacy-policy'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className='mt-6'>
                      <a
                        href='/terms-of-service'
                        className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-1/2 px-6 flex flex-col justify-between'>
                  <div className='flex items-center mb-6'>
                    <a
                      href='https://github.com/lucianmurmurache'
                      rel='external noopener noreferrer'
                      target='_blank'
                      aria-label='Visit Github profile'
                    >
                      <div className='text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='32'
                          height='32'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className='flex items-center mb-6'>
                    <a
                      href='https://murmurache.com'
                      rel='external noopener noreferrer'
                      target='_blank'
                      aria-label='Visit portfolio site'
                    >
                      <div className='text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='32'
                          height='32'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                          <circle cx='12' cy='7' r='4'></circle>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

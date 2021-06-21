const Footer = () => {
  return (
    <div>
      <footer id='footer' className='relative dark:bg-gray-900'>
        <div className='border-t border-gray-200 dark:border-gray-700 py-16'>
          <div className='max-w-4xl mx-auto container px-4 xl:px-12 2xl:px-4'>
            <div className='w-full mb-16 lg:mb-0 flex'>
              <div className='w-full px-2 lg:px-6 flex-auto'>
                <ul>
                  <li>
                    <a
                      target='_blank'
                      rel='external noreferrer noopener nofollow'
                      href='https://rickandmortyapi.com'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      API
                    </a>
                  </li>
                  <li className='mt-6'>
                    <a
                      target='_blank'
                      rel='external noreferrer noopener nofollow'
                      href='https://github.com/lucianmurmurache/rick-and-morty'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      Github
                    </a>
                  </li>
                  <li className='mt-6'>
                    <a
                      target='_blank'
                      rel='external noreferrer noopener nofollow'
                      href='https://murmurache.com'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full px-2 lg:px-6 flex-auto'>
                <ul>
                  <li>
                    <a
                      href='/characters'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      Characters
                    </a>
                  </li>
                  <li className='mt-6'>
                    <a
                      href='/locations'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      Locations
                    </a>
                  </li>
                  <li className='mt-6'>
                    <a
                      href='/episodes'
                      className='text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50'
                    >
                      Episodes
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-full px-2 lg:px-6 flex-auto'>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

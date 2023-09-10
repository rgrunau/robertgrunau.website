import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa';

import Navigation from './Navigation';

const Header = () => (
  <header
    className='w-80 sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between align-center px-2 py-4 border-b-2 border-text-white'>
    <div className='flex align-center justify-center'>
      <Link href="/" className={`text-4xl text-white flex flex-col align-center justify-center`}>
          <div className='text-white'> {`{RJG}`}</div>
      </Link>
    </div>
    <Navigation /> 
  </header>
);

export default Header;
import Link from 'next/link';
import {FaArrowLeft} from 'react-icons/fa';

import { plexMono } from '@/pages/index';

const Header = () => (
  <header className='w-80 sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl mx-auto flex justify-between align-center px-2 py-4 border-b-2 border-text-white'>
    <div className='flex align-center justify-center'>
      <Link href="/" className={`text-4xl text-white flex flex-col align-center justify-center ${plexMono.className}`}>
          <div className='text-white'> {`{RJG}`}</div>
      </Link>
    </div>
    {/* <div className=' hidden flex flex-col justify-center items-center'>
      <button className='w-[36] h-[36] flex justify-center items-center bg-yellow-200 text-black px-4 py-2 rounded-full b-0'>
        <FaArrowLeft />
      </button>
    </div> */}
    <div className='flex items-center'>
      <nav className='flex justify-center items-center'>
        <ul className='flex justify-center items-center'>
          <li className='text-white text-xl mx-2'>
            <Link href='/about'>
              about
            </Link>
          </li>
          <li className='text-white text-xl mx-2'>
            <Link href='/projects'>
              projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    
  </header>
);

export default Header;
import { FaArrowLeft, FaLaptopCode, FaUserAstronaut, FaPlus } from 'react-icons/fa'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import  Layout  from '@/components/layout/Layout'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
const plexMono = IBM_Plex_Mono({ weight:['400'] ,subsets: ['latin'] })
export default function Home() {
  return (
    <Layout>
      <header className='w-80 sm:w-9/12 md:w-5/6 mx-auto flex justify-between align-center px-2 py-4 border-b-2 border-text-white'>
        <div className='flex align-center justify-center'>
          <Link href="/" className={`text-4xl text-white flex flex-col align-center justify-center ${plexMono.className}`}>
              <div className='text-white'> {`{RJG}`}</div>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <button className='w-[36] h-[36] flex justify-center items-center bg-white text-black px-4 py-2 rounded-lg b-0'>
            <FaArrowLeft />
          </button>
        </div>
      </header>
      <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className='flex flex-col sm:w-9/12 md:w-5/6 sm:mx-auto items-center justify-center gap-8'>
          <div className='w-full flex flex-col items-center justify-between p-2 gap-8'>
            <div className='w-full flex items-center justify-evenly'>
              <div className='flex flex-col items-center justify-center'>
                <FaUserAstronaut className='text-6xl text-white'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <FaPlus className='text-6xl text-white'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <FaLaptopCode className='text-6xl text-white' />
              </div>
            </div>
            <div className='p-2 sm:text-center'>
              <h1 className='text-5xl font-bold text-white'>I make the things you see on the screen</h1>
            </div>
          </div>
        </div>
      </main>
      <footer className='flex justify-between p-8'>
        <div>
          footer
        </div>
      </footer>
    </Layout>
  )
}

import { FaArrowLeft } from 'react-icons/fa'
import { Inter } from 'next/font/google'
import  Layout  from '@/components/layout/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <header className='w-80 mx-auto flex justify-between align-center p-2 border-b-2 border-black'>
        <div className='flex align-center justify-center'>
          <h1 className={`text-xl text-white ${inter.className}`}>
            Header
          </h1>
        </div>
        <div>
          <button className='w-[40] h-[40] bg-white text-black px-4 py-2 rounded-lg b-0'>
            <FaArrowLeft />
          </button>
        </div>
      </header>
      <main
        id='mainContent'
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className='flex flex-col items-center justify-center gap-8'>
          stuff
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

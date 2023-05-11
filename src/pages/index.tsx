import { request } from '@/lib/datocms'
import { IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import  Layout  from '@/components/layout/Layout'
import {IoWarningOutline} from 'react-icons/io5'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/home/components/HeroSection'


export const plexMono = IBM_Plex_Mono({ weight:['400'] ,subsets: ['latin'] })

const HOMEPAGE_QUERY = `
  query HomePage {
    author {
      authorname
      shortBio
      skills {
        id
        skillType
      }
      jobTitles {
        id
        job
      }
    }
  }
`;



export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  })

  return {
    props: { data }
  }
}

interface HomePageDataProps {
  data: DatoCmsHomePageData
}

export default function Home({data}: HomePageDataProps) {
  console.log(`Hey, did you look here to see if I accidentally left my api key in the code? Or accidentally shipped a console.log?`);
  return (
    <Layout>
      <Header />
      <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between md:justify-start ${plexMono.className}`}
      >
       <HeroSection author={data.author} />
        <section className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8 md:gap-4 md:py-8 mt-12'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='self-start p-2'>
              <h2 className='text-3xl md:text-4xl xl:text-5xl text-white'>"Short" Bio</h2> 
            </div>
            <div className='flex items-center gap-8 p-2'>
              <div>
                <IoWarningOutline className='text-3xl text-yellow-200'/>
              </div>
              <div className='text-center'>
                <h3 className='text-xs sm:text-lg xl:text-xl text-text-white'>WARNING THIS LONG, IT WAS LATE, FORGIVE ME</h3>
              </div>
              <div>
                <IoWarningOutline className='text-3xl rotate-180 text-yellow-200'/>
              </div>
            </div>
            <article 
              className='flex flex-col items-center justify-center text-sm md:text-lg xl:text-xl text-white gap-8 p-2' 
              dangerouslySetInnerHTML={{__html: data.author.shortBio}}
            />
          </div>
        </section>
      </main>
      <footer className='flex justify-between p-8'>
        <div>
          footer
        </div>
      </footer>
    </Layout>
  )
}

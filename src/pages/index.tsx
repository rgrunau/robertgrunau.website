import { request } from '@/lib/datocms'
import { IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import  Layout  from '@/components/layout/Layout'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/home/components/HeroSection'
import BioSection from '@/components/home/components/BioSection'
import {BsRocketTakeoff} from 'react-icons/bs'

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
        <BioSection shortBio={data.author.shortBio} />
        <section className='w-full bg-blue h-60 flex items-center'>
          <div>
            <BsRocketTakeoff
              className='text-9xl text-slate-200 rotate-45 animate-move-rocket ' 
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

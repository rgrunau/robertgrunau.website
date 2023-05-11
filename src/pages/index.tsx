import { request } from '@/lib/datocms'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import  Layout  from '@/components/layout/Layout'

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
  
  return (
    <Layout>
      <Header />
      <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between ${plexMono.className}`}
      >
       <HeroSection author={data.author} />
        <section className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8'>
          <div className='flex flex-col items-center justify-center gap-8'>
            stuff here
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

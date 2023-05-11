import { request } from '@/lib/datocms'
import { IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import HeroSection from '@/components/home/components/HeroSection'
import BioSection from '@/components/home/components/BioSection'
import SpaceSection from '@/components/home/components/SpaceSection'

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
    <>
      <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between md:justify-start ${plexMono.className}`}
      >
        <HeroSection author={data.author} />
        <BioSection shortBio={data.author.shortBio} />
        <SpaceSection />
      </main>
    </>
  )
}

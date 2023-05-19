import { request } from '@/lib/datocms'
import { IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import HeroSection from '@/components/home/components/HeroSection'
import BioSection from '@/components/home/components/BioSection'
import SpaceSection from '@/components/home/components/SpaceSection'
import MainContainer from '@/components/common/MainContainer'

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
      <MainContainer>
        <HeroSection author={data.author} />
        <BioSection shortBio={data.author.shortBio} />
        <SpaceSection />
      </MainContainer>
    </>
  )
}

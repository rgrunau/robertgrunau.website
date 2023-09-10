import { request } from '@/lib/datocms'

import { DatoCmsHomePageData } from '@/components/home/const/interfaces'
import HeroSection from '@/components/home/components/HeroSection'
import BioSection from '@/components/home/components/BioSection'
import SpaceSection from '@/components/home/components/SpaceSection'
import MainContainer from '@/components/common/MainContainer'



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



export async function getDatoCMSData(): Promise<DatoCmsHomePageData> {
  const data = await request({
    query: HOMEPAGE_QUERY,
  }) as DatoCmsHomePageData;

  return data;
}



export default async function Home() {
  const data = await getDatoCMSData();
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

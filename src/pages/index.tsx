import { useCallback } from 'react'
import { request } from '@/lib/datocms'
import { FaArrowLeft, FaLaptopCode, FaUserAstronaut, FaPlus } from 'react-icons/fa'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { DatoCmsHomePageData, Skill } from '@/components/home/const/interfaces'
import  Layout  from '@/components/layout/Layout'
import Link from 'next/link'
import {SiTypescript, SiReactquery, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'


const inter = Inter({ subsets: ['latin'] })
const plexMono = IBM_Plex_Mono({ weight:['400'] ,subsets: ['latin'] })

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

interface SkillIconPair {
  [key: string]: JSX.Element,
}

const SkillsIcon: SkillIconPair = {
  'react': <SiReact />,
  'react query': <SiReactquery />,
  'javascript': <SiJavascript />,
  'typescript': <SiTypescript />,
  'html': <SiHtml5 />,
  'css': <SiCss3 />,
  'tailwind': <SiTailwindcss />,
  'nextjs': <TbBrandNextjs />,
}

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
  const iconToRender = useCallback((skill: Skill) => {
    const icon = SkillsIcon[skill.skillType];
    return icon ? icon : null;
  }, []);
  return (
    <Layout>
      <header className='w-80 sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl mx-auto flex justify-between align-center px-2 py-4 border-b-2 border-text-white'>
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
        <div className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8'>
          <div className='w-full flex flex-col lg:flex-row items-center justify-between p-2 xl:p-0 gap-8'>
            <div className='flex flex-col items-center justify-center gap-8 lg:order-2 xl:w-1/2'>
              <div className='w-full flex items-center justify-evenly'>
                <div className='flex flex-col items-center justify-center'>
                  <FaUserAstronaut className='text-6xl lg:text-8xl text-yellow-200'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <FaPlus className='text-5xl text-white'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <FaLaptopCode className='text-6xl lg:text-8xl text-white' />
                </div>
              </div>
              <div className='w-full flex flex-wrap items-center justify-evenly gap-2 p-2'>
                {data.author.skills.map((skill: Skill) => (
                  <div key={skill.id} 
                    className='text-2xl odd:text-yellow-200 even:text-white md:text-3xl lg:text-4xl flex flex-col items-center justify-center '
                  >
                    { iconToRender && iconToRender(skill)}
                  </div>
                ))}
              </div>
            </div>
            <div className='p-2 sm:text-center lg:order-1 lg:text-left xl:w-1/2'>
              <h1 className='text-5xl lg:text-7xl text-white'>I make the things you see on the screen</h1>
            </div>
          </div>
        </div>
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

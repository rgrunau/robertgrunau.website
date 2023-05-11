import { request } from "@/lib/datocms";
import { plexMono } from ".";
import { FaUserAstronaut } from "react-icons/fa";
import { FormEvent } from "react";


const ABOUT_QUERY = `
  query AboutPage {
    about {
      aboutText
      id
      pageTitle
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
  })

  return {
    props: { data }
  }
}

interface AboutPageData {
  id: string,
  pageTitle: string,
  aboutText: string,
}

interface AboutPage {
  about: AboutPageData,
}
interface AboutPageProps {
  data: AboutPage,
}

export default function About({data}: AboutPageProps) {
  console.log(data);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  return (
    <main
      id='mainContent'
      className={`flex w-screen min-h-screen flex-col items-center md:justify-start gap-8${plexMono.className}`}
    >
      <section className='flex flex-col w-full sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center gap-8'>
        <div className='w-full flex flex-col items-center p-2 xl:p-0 gap-8 mx-auto'>
          <div className="flex flex-col items-center sm:flex-row lg:justify-center lg:mx-auto">
            <div className='flex flex-col items-center justify-center sm:w-1/2 lg:w-1/4 lg:items-start lg:justify-start'>
              <FaUserAstronaut className='text-7xl lg:text-9xl text-yellow-200'/>
            </div>
            <div className='flex flex-col items-center py-4 px-2 w-full sm:w-1/2'>
              <article className='text-sm lg:text-md py-4 text-text-white' dangerouslySetInnerHTML={{__html: data.about.aboutText}}/>
            </div>
          </div>
        </div>
      </section>
  </main>
  )
}
  
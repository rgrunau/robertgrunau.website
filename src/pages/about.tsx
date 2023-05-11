import { request } from "@/lib/datocms";
import { plexMono } from ".";
import { FaUserAstronaut } from "react-icons/fa";
import { AboutPage } from "@/components/about/const/interfaces";


const ABOUT_QUERY = `
  query AboutPage {
    about {
      aboutText
      id
      pageTitle
    }
    author {
      authorname
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


interface AboutPageProps {
  data: AboutPage,
}

export default function About({data}: AboutPageProps) {
  const {author, about} = data ?? {};
  return (
    <main
      id='mainContent'
      className={`flex w-screen min-h-screen flex-col items-center md:justify-start gap-8${plexMono.className}`}
    >
      <section className='flex flex-col w-full sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center gap-8 p-8'>
        <div className="flex flex-col items-center justify-center lg:mx-auto">
          <div className='w-full flex flex-col sm:flex-row sm:justify-between items-center p-4'>
            <div className="self-start w-1/2 py-6 sm:py-2">
              <h1 className="text-yellow-200 text-5xl">{`Hello! I'm ${author.authorname}`}</h1>
              <div className="hidden sm:flex sm:w-full sm:justify-center items-center sm:my-8">
                <FaUserAstronaut className='inline-block w-60 h-60 text-text-white animate-wiggle' />
              </div>
            </div>
            <div className="w-full flex flex-col sm:w-1/2">
              <article className='text-lg text-text-white' dangerouslySetInnerHTML={{__html: about.aboutText}}/>
              <div>
                <a className="w-full text-purple border-yellow-300 bg-yellow-300 border-2 rounded-lg p-6" 
                href="mailto:robertgrunau@hey.com"
                >
                  reach out
                </a>              
              </div>
            </div>
          </div>
        </div>
      </section>
  </main>
  )
}
  
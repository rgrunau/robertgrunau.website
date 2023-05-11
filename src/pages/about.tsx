import { request } from "@/lib/datocms";
import { plexMono } from ".";
import { FaUserAstronaut } from "react-icons/fa";
import Input from "@/components/common/inputs/Input";
import TextArea from "@/components/common/inputs/TextArea";

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

  return (
    <main
      id='mainContent'
      className={`flex w-screen min-h-screen flex-col items-center md:justify-start gap-8${plexMono.className}`}
    >
      <section className='flex flex-col w-full sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center gap-8'>
        <div className='w-full flex flex-col items-center p-2 xl:p-0 gap-8'>
          <div className="flex flex-col sm:flex-row">
            <div className='flex flex-col items-center justify-center gap-8 sm:w-1/2'>
              <FaUserAstronaut className='text-7xl lg:text-8xl text-yellow-200'/>
            </div>
            <div className='p-2 w-full sm:w-1/2'>
              <article className='text-sm lg:text-4xl text-white' dangerouslySetInnerHTML={{__html: data.about.aboutText}}/>
            </div>
          </div>
          <div className='p-2 w-full xl:w-1/2 border-2 border-yellow-200 rounded-lg'>
            <form className='flex flex-col items-center justify-center gap-4 p-2'>
              <Input
                label='name'
                type='text'
                placeholder="What's your name?"
              />
              <Input
                label='email'
                type='email'
                placeholder="What's your email?"
              />

              <TextArea
                label='message'
                placeholder='What do you want to say?'
              />
              <div>
                <button 
                  className='w-full p-2 rounded-lg bg-yellow-200 text-purple py-2 px-4'
                  type='submit' 
                  >
                    Send
                  </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  </main>
  )
}
  
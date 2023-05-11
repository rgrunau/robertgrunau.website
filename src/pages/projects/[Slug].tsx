import { request } from '@/lib/datocms'
import { plexMono } from '..';
import { useQuerySubscription, QueryListenerOptions, } from 'react-datocms';
import { CoverImage, Project } from '@/components/home/const/interfaces';
import { ProjectsPageData } from '@/components/projects/const/interfaces';
import {Image} from 'react-datocms'


export async function getStaticPaths() {
  const data = await request({ query: `{ allProjects { slug } }` }) as ProjectsPageData;

  return {
    paths: data.allProjects.map((project: Project) => `/projects/${project.slug}`),
    fallback: false,
  }
}
interface GetStaticPathParams {
  params: { slug: string }
  preview: boolean
}
export async function getStaticProps({ params, preview=false }: GetStaticPathParams) {
  
  const graphqlRequest = {
    query: `
    query ProjectBySlug($slug: String) {
      project(filter: {slug: {eq: $slug}}) {
        coverImage {
          id
          responsiveImage {
            alt
            aspectRatio
            base64
            height
            bgColor
            sizes
            src
            srcSet
            webpSrcSet
            title
            width
          }
        }
        id
        slug
        title
        excerpt
        projectImages {
          id
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
      }
    }
    
    `,
    preview,
    variables: {
      slug: params.slug
    }
  }

  return {
    props: {
      subscription: preview ? {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_DATOCMS_API_TOKEN,

      }: {
        enabled: false,
        initialData: await request(graphqlRequest)
      },
    }
  }
}

interface PostProps {
  subscription: any //QueryListenerOptions<ProjectsPageData,
  preview: boolean
}

export default function Post({subscription, preview=false}: PostProps) {
  const { data } = useQuerySubscription(subscription); 
  const { project } = data ?? {};
  const { title, coverImage, excerpt, projectImages } = project ?? {};

  return (
    <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between md:justify-start ${plexMono.className}`}
      >
      <div className='w-80 sm:w-9/12 md:w-5/6 xl:w-max-[960] felx flex-col justify-center mx-auto p-2 text-text-white gap-x-4'>
        <div className='w-full sm:w-9/12 md:w-5/6 w-max-[960] mx-auto'>
          <Image 
            className='w-full'
            data={coverImage.responsiveImage}/>
        </div>
        <div className='w-full sm:w-9/12 md:w-5/6 w-max-[960] mx-auto my-4 px-2 py-4'>
          <h2 className='text-4xl'>{title}</h2>
        </div>
        <div className='w-full px-2 py-4 sm:w-9/12 md:w-5/6 w-max-[960] mx-auto my-4'>
          <article className='text-md xl:text-lg' dangerouslySetInnerHTML={{__html: excerpt}}/>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-4 my-6'>
          {projectImages && projectImages.map((image: CoverImage) => (
            <div key={image.id} className='ounded-lg border-2 border-text-white my-8'>
              <Image
                data={image.responsiveImage}
                className='rounded-lg'
               />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
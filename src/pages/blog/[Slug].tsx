import { request } from '@/lib/datocms'
import { useQuerySubscription, } from 'react-datocms';
import {Image} from 'react-datocms'
import MainContainer from '@/components/common/MainContainer';
import { BlogPageData, BlogPost } from '@/components/blog/const/interfaces';


export async function getStaticPaths() {
  const data = await request({ query: `{ allBlogPosts { slug } }` }) as BlogPageData;

  return {
    paths: data.allBlogPosts.map((post: BlogPost) => `/blog/${post.slug}`),
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
    query BlogPostBySlug($slug: String) {
      blogPost(filter: {slug: {eq: $slug}}) {
        postHero {
          id
          alt
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
        postText
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
  const { blogPost } = data ?? {};
  const { title, postHero, postText } = blogPost ?? {};

  return (
    <MainContainer>
      <div className='w-full sm:w-9/12 md:w-5/6 xl:w-max-[960] felx flex-col justify-center mx-auto p-4 text-text-white gap-x-4'>
        <div className='w-full sm:w-9/12 md:w-5/6 w-max-[960] mx-auto'>
          <Image 
            className='w-full border-2 border-text-white rounded-lg'
            data={postHero.responsiveImage}/>
        </div>
        <div className='w-full sm:w-9/12 md:w-5/6 w-max-[960] mx-auto my-4 px-2 py-4'>
          <h2 className='text-4xl'>{title}</h2>
        </div>
        <div className='w-full px-2 py-4 sm:w-9/12 md:w-5/6 w-max-[960] mx-auto my-4'>
          <article className='text-md xl:text-lg' dangerouslySetInnerHTML={{__html: postText}}/>
        </div>
      </div>
    </MainContainer>
  )
}
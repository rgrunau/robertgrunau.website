import { request } from '@/lib/datocms'
import MainContainer from "@/components/common/MainContainer";
import { Image } from 'react-datocms/image';
import Link from 'next/link';
import { CoverImage } from '@/components/home/const/interfaces';


interface ViewProps {
  allBlogPosts: BlogPost[],
  noPosts: boolean
}

const View = ({allBlogPosts, noPosts}: ViewProps) => (
  <MainContainer>
      {noPosts && (
        <div>
          <h1>There are no posts yet</h1>
        </div>
      )}
      <div className='flex flex-col lg:grid lg:grid-cols-[1fr_250px] lg:grid-rows-2'>
        <aside className='hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-span-2 text-yellow-200'>
          <div className='flex flex-col items-center justify-center text-center px-8 py-2 w-full'>
            <div className='mt-8 mb-4 border-b-2 border-b-yellow-200'>
              <h1 className='text-2xl'>All Posts</h1>
            </div>
            <div className='flex flex-col'>
              {allBlogPosts.map((post) => (
                <Link 
                  href={post.slug}
                  className='text-left text-xl mx-8 my-2'
                >
                  <span>{post.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <div className='flex flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 row-start-1 row-end-3'>
          {!noPosts && allBlogPosts.map((post) => (
            <div
              className='p-4 mx-auto md:w-11/12 lg:w-11/12 border-b-2 border-gray-200 text-text-white my-6'
              key={post.id}
            >
              <Link 
                className='w-full flex flex-col gap-4 text-left'
                href={`/blog/${post.slug}`}>
                <Image className='border-2 border-gray-200 rounded-lg' data={post.postHero.responsiveImage} />
                <div className='px-4'>
                  <h1 className='text-xl font-normal'>{post.title}</h1>
                </div>
                <div className='text-md font-thin '>
                  <article className='px-4' dangerouslySetInnerHTML={{__html: post.excerpt}} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
  </MainContainer>
);



const BLOG_PAGE_QUERY = `
  query BlogPage {
    allBlogPosts {
      id
      publishedDate
      slug
      title
      excerpt
      postHero {
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
`

export async function getStaticProps() {
  const data = await request({
    query: BLOG_PAGE_QUERY,
  })

  return {
    props: { data }
  }
}

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  postHero: CoverImage
}
interface BlogPageData {
  allBlogPosts: BlogPost[],
}
interface BlogPageDataProps {
  data: BlogPageData,
}


const BlogIndex = ({data}: BlogPageDataProps) => { 

  const { allBlogPosts } = data ?? {};

  const hookProps = {
    noPosts: allBlogPosts.length === 0,
    allBlogPosts
  }

  return (
    <View {...hookProps} />
  )
}

export default BlogIndex
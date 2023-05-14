import { request } from '@/lib/datocms'
import MainContainer from "@/components/common/MainContainer";
import { Image, ResponsiveImageType } from 'react-datocms/image';
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
      {!noPosts && allBlogPosts.map((post) => (
        <div
          className='p-4 w-[90%] mx-auto md:w-1/2 lg:w-1/3 border-b-2 border-gray-200 text-text-white mb-6'
          key={post.id}
        >
          <Link 
            className='w-full flex flex-col gap-4'
            href={`/blog/${post.slug}`}>
            <Image data={post.postHero.responsiveImage} />
            <div>
              <h1 className='text-xl font-normal'>{post.title}</h1>
            </div>
            <div className='text-md font-thin'>
              <article dangerouslySetInnerHTML={{__html: post.excerpt}} />
            </div>
          </Link>
        </div>
      ))}
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
  slug: string
  id: string
  title: string
  excerpt: string
  postHero: CoverImage
}
interface BlogPageData {
  allBlogPosts: BlogPost[]
}
interface BlogPageDataProps {
  data: BlogPageData[]
}


const BlogIndex = ({data}: BlogPageDataProps) => { 

  const { allBlogPosts } = data ?? {};
  console.log(data);

  const hookProps = {
    noPosts: allBlogPosts.length === 0,
    allBlogPosts
  }

  return (
    <View {...hookProps} />
  )
}

export default BlogIndex
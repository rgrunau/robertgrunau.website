import { request } from '@/lib/datocms'
import { CoverImage } from '@/components/home/const/interfaces';
import MainContainer from "@/components/common/MainContainer";
import BlogAside from '@/components/blog/BlogAisde';
import MainBlog from '@/components/blog/MainBlog';


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
        <BlogAside allBlogPosts={allBlogPosts} />
        <MainBlog allBlogPosts={allBlogPosts} noPosts={noPosts} />
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

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  postHero: CoverImage
}
export interface BlogPageData {
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
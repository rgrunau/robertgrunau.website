import { request } from '@/lib/datocms'
import { BlogPageData, BlogPost } from '@/components/blog/const/interfaces'
import MainContainer from "@/components/common/MainContainer";
import BlogAside from '@/components/blog/BlogAisde';
import MainBlog from '@/components/blog/MainBlog';
import EmptyPosts from '@/components/blog/EmptyPosts';


interface ViewProps {
  allBlogPosts: BlogPost[],
  noPosts: boolean
}

const View = ({allBlogPosts, noPosts}: ViewProps) => (
  <MainContainer>
      {noPosts && (
        <EmptyPosts text={'blog posts'}/>
      )}
      {allBlogPosts.length > 0 && (
        <div className='flex flex-col lg:grid lg:grid-cols-[1fr_250px] lg:grid-rows-2'>
          <BlogAside allBlogPosts={allBlogPosts} />
          <MainBlog allBlogPosts={allBlogPosts} noPosts={noPosts} />
        </div>
      )}
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


interface BlogPageDataProps {
  data: BlogPageData,
}


const BlogIndex = ({data}: BlogPageDataProps) => { 

  const { allBlogPosts } = data ?? {};

  const hookProps = {
    noPosts: true,
    allBlogPosts: []
  }

  return (
    <View {...hookProps} />
  )
}

export default BlogIndex
import { request } from '@/lib/datocms'
import MainContainer from "@/components/common/MainContainer";
import { ResponsiveImageType } from 'react-datocms/image';



const View = () => (
  <MainContainer>
    <h1>Blog</h1>
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
  postHero: ResponsiveImageType
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

  }

  return (
    <View {...hookProps} />
  )
}

export default BlogIndex
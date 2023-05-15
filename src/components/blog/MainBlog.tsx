import { Image } from "react-datocms/image"
import Link from "next/link"
import { BlogPost } from "@/components/blog/const/interfaces"

interface MainBlogProps {
  allBlogPosts: BlogPost[],
  noPosts: boolean
}
const MainBlog = ({allBlogPosts, noPosts}: MainBlogProps) => (
  <div className='flex flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 row-start-1 row-end-3'>
    {!noPosts && allBlogPosts.map((post) => (
      <div
        className='p-4 mx-auto md:w-11/12 lg:w-11/12 border-b-2 border-gray-200 text-text-white my-6'
        key={post.id}
      >
        <Link 
          className='w-full flex flex-col gap-4 text-left'
          href={`/blog/${post.slug}`}>
          <Image className='border-2 border-gray-200 rounded-lg' data={{...post.postHero.responsiveImage}} />
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
)

export default MainBlog
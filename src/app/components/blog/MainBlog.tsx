
import Link from "next/link"
import Image from "next/image"
import { SanityBlogPost } from "@/sanity/sanity-queries"

interface MainBlogProps {
  allBlogPosts: SanityBlogPost[],
  noPosts: boolean
}
const MainBlog = ({allBlogPosts, noPosts}: MainBlogProps) => (
  <div className='flex flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 row-start-1 row-end-3'>
    {!noPosts && allBlogPosts.map((post) => (
      <div
        className='p-4 mx-auto w-full max-w-80 border-b-2 border-gray-200 text-text-white my-6'
        key={post._id}
      >
        <Link 
          className='w-full xl:w-1/3 flex flex-col gap-4 text-left'
          href={`/blog/${post.slug}`}
        >
          <div className="w-full">
            <Image className='border-2 border-gray-200 rounded-lg' src={post.mainImage} width={1024} height={683} alt={post.mainImageAlt} />
          </div>
          <div className='px-4'>
            <h1 className='text-xl font-normal'>{post.title}</h1>
          </div>
          <div className='text-md font-thin '>
            {/* <article className='px-4' dangerouslySetInnerHTML={{__html: post.excerpt}} /> */}
          </div>
        </Link>
      </div>
    ))}
  </div>
)

export default MainBlog
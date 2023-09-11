import { getBlogPosts } from "@/sanity/sanity-queries";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {

  const blogPageData = await getBlogPosts();
  console.log(blogPageData);
  return (
    <div className='flex flex-col items-center justify-center text-center lg:col-start-1 lg:col-end-2 row-start-1 row-end-3'>
    { blogPageData.map((post) => (
      <div
        className='p-4 mx-auto w-11/12 lg:w-11/12 border-b-2 border-gray-200 text-text-white my-6'
        key={post._id}
      >
        <Link 
          className='w-full flex flex-col gap-4 text-left'
          href={`/blog/${post.slug}`}
        >
          <div>
            <Image className='border-2 border-gray-200 rounded-lg' src={post.mainImage} width={500} height={500} alt="" />
          </div>
          {/* <Image className='border-2 border-gray-200 rounded-lg' data={{...post.postHero.responsiveImage}} /> */}
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
}
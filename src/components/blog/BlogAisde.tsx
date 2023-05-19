import { BlogPageData } from "@/components/blog/const/interfaces";
import Link from 'next/link';

const BlogAside = ({allBlogPosts }:BlogPageData) => (
  <aside className='hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-span-2 text-yellow-200'>
    <div className='flex flex-col items-center justify-center text-center px-8 py-2 w-full'>
      <div className='mt-8 mb-4 border-b-2 border-b-yellow-200'>
        <h1 className='text-2xl'>All Posts</h1>
      </div>
      <div className='flex flex-col'>
        {allBlogPosts.map((post) => (
          <Link 
            key={post.id}
            href={post.slug}
            className='text-left text-xl mx-8 my-2'
          >
            <span>{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  </aside>
);

export default BlogAside;
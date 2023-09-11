import BlogAside from "@/components/blog/BlogAisde";
import MainContainer from "@/components/common/MainContainer";
import { getBlogPosts } from "@/sanity/sanity-queries";

export default async function BlogPageLayout({children}: {children: React.ReactNode}) {

  const blogPageData = await getBlogPosts();

  return (
    <div className="w-full">
      <main>
        {children}
      </main>
      <BlogAside allBlogPosts={blogPageData} />
    </div>
   
  )
  
}



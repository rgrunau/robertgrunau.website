import MainBlog from "@/components/blog/MainBlog";
import { getBlogPosts } from "@/sanity/sanity-queries";


export default async function BlogPage() {

  const blogPageData = await getBlogPosts();
  const noPosts = blogPageData.length === 0;
  console.log(blogPageData);
  return (
    <MainBlog allBlogPosts={blogPageData} noPosts={noPosts} />
  )
}
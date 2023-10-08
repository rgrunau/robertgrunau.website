import BlogAside from "@/app/components/blog/BlogAisde";
import { getBlogPosts } from "@/sanity/sanity-queries";

export default async function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogPageData = await getBlogPosts();

  return (
    <div className="w-full flex flex-col xl:flex-row">
      <main className="W-full xl:w-2/3">{children}</main>
      <BlogAside allBlogPosts={blogPageData} />
    </div>
  );
}

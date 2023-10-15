import { SanityBlogPost } from "@/sanity/sanity-queries";
import BlogCard from "./BlogCard";
interface BlogSectionProps {
  blogPosts: SanityBlogPost[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <section className="w-full py-5">
      <div className="w-full lg:max-w-[1350px] mx-auto p-4 flex flex-col items-center justify-center">
        <div className="w-full text-center">
          <h2 className="text-3xl font-semibold">Latest Post</h2>
        </div>

        <div className="w-full">
          <ul className="w-full flex flex-col justify-center items-center my-4">
            {blogPosts.map((post) => (
              <BlogCard post={post} key={post._id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

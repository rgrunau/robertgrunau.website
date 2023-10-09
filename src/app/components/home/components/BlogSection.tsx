import { SanityBlogPost } from "@/sanity/sanity-queries";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "./BlogCard";
interface BlogSectionProps {
  blogPosts: SanityBlogPost[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <section className="w-full bg-slate-50 py-5">
      <div className="w-full lg:max-w-[1350px] mx-auto p-4 flex flex-col items-center justify-center">
        <div className="w-full">
          <h2 className="text-3xl font-semibold">Latest Posts</h2>
        </div>

        <div className="w-full">
          <ul className="w-full flex flex-col lg:flex-row my-4">
            {blogPosts.map((post) => (
              <BlogCard post={post} key={post._id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

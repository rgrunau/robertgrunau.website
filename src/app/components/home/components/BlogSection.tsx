"use client";
import { SanityBlogPost } from "@/sanity/sanity-queries";
import Link from "next/link";
import { useRef, useState } from "react";
interface BlogSectionProps {
  blogPosts: SanityBlogPost[];
}

export default function BlogSection({ blogPosts }: BlogSectionProps) {
  const [showBlog, setShowBlog] = useState<boolean>(false);
  const postRef = useRef<HTMLLIElement>(null);
  const pullPostImage = () => {
    const postId = postRef.current?.id;
    const post = blogPosts.find((post) => post._id === postId);

    setShowBlog(!showBlog);
  };
  const hidePostImage = () => {
    setShowBlog(false);
  };
  return (
    <section className="w-full bg-dark py-4 px-2 text-text-white">
      <div className="w-full max-w-[1350px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center p-4 ">
        <div className="w-full flex-col items-start justify-start">
          <div>
            <h2 className="text-5xl lg:text-7xl font-semibold">Blog</h2>
          </div>
          <div className="w-full">
            <ul className="w-full flex-col items-start justify-start py-3">
              {blogPosts.map((post) => (
                <li
                  key={post._id}
                  id={post._id}
                  onMouseEnter={pullPostImage}
                  onMouseLeave={hidePostImage}
                  ref={postRef}
                >
                  <Link
                    className="text-3xl font-light"
                    href={`/blog/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {showBlog && <div className="hidden lg:flex">Blog Image</div>}
      </div>
    </section>
  );
}

import { SanityBlogPost } from "@/sanity/sanity-queries";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  post: SanityBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const prettifyDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <li key={post._id} className="w-full md:w-1/2">
      <Link
        href={`/blog/${post.slug}`}
        className="w-full flex flex-col items-start justify-start"
      >
        <div className="w-full">
          <Image
            src={post.mainImage}
            alt={post.mainImageAlt}
            width={400}
            height={400}
          />
        </div>
        <div className="w-full p-2">
          <h4 className="text-2xl">{post.title}</h4>
        </div>
        <div className="w-full p-2">
          <p>{prettifyDate(post._createdAt)}</p>
        </div>
        <div className="w-full flex items-center p-2">
          <div className="w-2/6">
            <p>Filed under:</p>
          </div>
          <ul className="w-3/5 flex items-center justify-start">
            {post.categories.map((category) => (
              <li
                key={category}
                className="mx-2 text-sm font-semibold bg-dark text-white px-2 py-1 rounded-md"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}

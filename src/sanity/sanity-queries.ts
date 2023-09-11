import { groq } from 'next-sanity'
import client from './sanity.client'

interface Author {
  name: string
}
interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: Author;
  categories: string[];
  mainImage: string;
  mainImageAlt: string;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(groq`
    *[_type == "post"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "author": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      body,
    }
  `)
}

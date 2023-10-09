import { groq } from "next-sanity";
import client from "./sanity.client";
import { PortableTextBlock } from "sanity";

interface Author {
  name: string;
}
export interface SanityBlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: Author;
  categories: string[];
  mainImage: string;
  mainImageAlt: string;
  mainImageWidth: number;
  mainImageHeight: number;
}

export const getBlogPosts = async (): Promise<SanityBlogPost[]> => {
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
      "mainImageWidth": mainImage.metadata.dimensions.width,
      "mainImageHeight": mainImage.metadata.dimensions.height,
    }
  `);
};

interface SanityHomePageData {
  page_title: string;
  page_headline: string;
  page_sub_headline: string;
  page_image: string;
  page_image_alt: string;
  page_image_width: number;
  page_image_height: number;
  page_description: PortableTextBlock[];
  newsletter_title: string;
  newsletter_blurb: PortableTextBlock[];
}

export const getHomePageData = async (): Promise<SanityHomePageData> => {
  return await client.fetch(groq`
    *[_type == "home"][0]{
      page_title,
      page_headline,
      page_sub_headline,
      "page_image": page_image.asset->url,
      "page_image_alt": page_image.alt,
      "page_image_width": page_image.metadata.dimensions.width,
      "page_image_height": page_image.metadata.dimensions.height,
      page_description,
      newsletter_title,
      newsletter_blurb,
    }
  `);
};

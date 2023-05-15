import { CoverImage } from '@/components/home/const/interfaces'
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  postHero: CoverImage
}
export interface BlogPageData {
  allBlogPosts: BlogPost[],
}
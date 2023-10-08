import { responsiveImage } from '@/const/interfaces'
export interface Skill {
  id: string,
  skillType: string,
}

export enum BlockType {
  BIO = 'bio',
  WorkHistory = 'work history',
  Stack = 'stack',
}
export interface Job {
  id: string,
  job: string,
}
export interface Project {
  slug: string,
  title: string,
  coverImage: CoverImage,
}

export interface HomePageBlock {
  id: string,
  title: string,
  blockText: string,
  blockType: BlockType,
}
interface HomePageDataReturn {
  id: string,
  homePageBlocks: HomePageBlock[],
}

export interface CoverImage {
  id: string,
  responsiveImage: responsiveImage,
}
export interface Author {
  authorname: string,
  jobTitles: Job[],
  shortBio: string, 
  skills: Skill[]
  profilePhoto: CoverImage,
}

export interface DatoCmsHomePageData {
  author: Author,
  project: Project,
 homepage: HomePageDataReturn,
 }
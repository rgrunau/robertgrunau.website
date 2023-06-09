import { CoverImage } from "@/components/home/const/interfaces"

interface Project {
  slug: string
  title: string
  id: string
  coverImage: CoverImage
}
export interface ProjectsPageData {
  allProjects: Project[]
}
import { responsiveImage } from "@/const/interfaces"

interface Project {
  slug: string
  title: string
  id: string
  coverImage: responsiveImage
}
export interface ProjectsPageData {
  allProjects: Project[]
}
import { Author } from "@/components/home/const/interfaces";

interface AboutPageData {
  id: string,
  pageTitle: string,
  aboutText: string,
}

export interface AboutPage {
  about: AboutPageData,
  author: Author,
}
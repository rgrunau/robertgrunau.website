import { request } from "@/lib/datocms";
import { plexMono } from "../index";
import { FaSpaceShuttle } from "react-icons/fa";
import { responsiveImage } from "@/const/interfaces";
import { Project } from "@/components/home/const/interfaces";
import { ProjectsPageData } from "@/components/projects/const/interfaces";
import Link from "next/link";


const PROJECTS_QUERY = `
  query ProjectsPage {
    allProjects {
      slug
      title
      id
      coverImage {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: PROJECTS_QUERY,
  })

  return {
    props: { data }
  }
}


interface ProjectsPageDataProps {
  data: ProjectsPageData
}

export default function Projects({data}: ProjectsPageDataProps) {
  console.log(data);
  const { allProjects } = data ?? {};
  return (
    <main
      id='mainContent'
      className={`flex w-screen min-h-screen flex-col items-centergap-8 p-10 ${plexMono.className}`}
    >
        <div className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8 text-text-white'>
          <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8'>
            {allProjects.map((project) => (
              <div key={project.id} 
                className='w-full p-4 min-w-80 flex flex-col items-center justify-center gap-4 border-text-white border-2 rounded-lg'>
                <Link  
                  href={`/projects/${project.slug}`}
                  className="w-full flex flex-col items-start justify-start gap-4"
                >
                  {project.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
} 



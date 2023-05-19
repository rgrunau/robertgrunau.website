import { request } from "@/lib/datocms";
import { ProjectsPageData } from "@/components/projects/const/interfaces";
import {Image} from 'react-datocms'
import Link from "next/link";
import MainContainer from "@/components/common/MainContainer";


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
  const { allProjects } = data ?? {};
  return (
    <MainContainer>
        <div className='flex flex-col sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center justify-center gap-8 text-text-white'>
          <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8'>
            {allProjects.map((project) => (
              <div key={project.id} 
                className='w-full sm:w-2/4 xl:max-w-60 flex flex-col items-center justify-center gap-4 border-yellow-200 border-2 rounded-lg grow-0 py-6 px-4'>
                <Link  
                  aria-label={`View ${project.title}`}
                  href={`/projects/${project.slug}`}
                  className="w-full flex flex-col items-start justify-center gap-4"
                >
                  <div className='w-full border-2 border-text-white rounded-lg'>
                    <Image
                    className='w-full rounded-lg'
                     data={project.coverImage.responsiveImage} />
                  </div>
                  <div>
                    {project.title}
                  </div>
                  <div className="border-4 border-yellow-200 bg-slate-50 px-2 py-4 text-purple rounded-lg">
                    <span>{`View Project`}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
    </MainContainer>
  )
} 



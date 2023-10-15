import { AllProjectsReturn } from "@/sanity/sanity-queries";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  projects: AllProjectsReturn[];
}

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full text-center">
        <h2 className="text-3xl font-semibold">Featured Project</h2>
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col justify-center items-center my-4">
          {projects?.map((project) => (
            <li key={project._id}>
              <Link
                href={`/projects/${project.slug}`}
                className="w-full flex flex-col justify-start items-start my-4"
              >
                <div className="w-full">
                  <Image
                    src={project.mainImage}
                    alt={project.mainImageAlt}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-full p-2">
                  <h4 className="text-2xl">{project.projectTitle}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { AllProjectsReturn } from "@/sanity/sanity-queries";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  projects: AllProjectsReturn[];
}

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  return (
    <section className="w-full max-w-[1350px] flex flex-col lg:flex-row lg:items-center px-4 py-8">
      <div className="w-full flex flex-col items-start justify-start lg:justify-between">
        <div>
          <h2 className="text-5xl lg:text-7xl font-bold text-black">
            Projects
          </h2>
        </div>
        <div className="hidden lg:block my-6 py-2">
          <Link
            href="/work"
            className="text-2xl font-light text-black bg-rg-orange hover:bg-white border-2 border-rg-orange px-4 py-2 rounded-lg"
          >
            See More
          </Link>
        </div>
      </div>
      <div className="w-full py-4">
        <ul>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="font-light text-black"
            >
              <div className="w-full flex flex-col">
                <div className="w-full">
                  <Image
                    src={project.mainImage}
                    alt={project.mainImageAlt}
                    width={2336}
                    height={1460}
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-3xl font-light text-black">
                    {project.projectTitle}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

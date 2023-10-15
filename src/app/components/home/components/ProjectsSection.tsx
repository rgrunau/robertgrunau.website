import { AllProjectsReturn } from "@/sanity/sanity-queries";

interface ProjectSectionProps {
  projects: AllProjectsReturn[];
}

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full">
        <h2 className="text-3xl font-semibold">Featured Post</h2>
      </div>
      {projects?.map((project) => (
        <div key={project._id}>
          <h1>{project.projectTitle}</h1>
        </div>
      ))}
    </div>
  );
}

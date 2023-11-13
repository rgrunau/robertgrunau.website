import MainContainer from "@/app/components/common/MainContainer";
import HeroSection from "@/app/components/home/components/HeroSection";
import SubHero from "@/app/components/home/components/SubHero";

import {
  getHomePageData,
  getBlogPosts,
  getProjects,
} from "@/sanity/sanity-queries";
import BlogSection from "./components/home/components/BlogSection";
import ProjectsSection from "./components/home/components/ProjectsSection";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await getHomePageData();
  const blogPosts = await getBlogPosts();
  const projects = await getProjects();
  return (
    <>
      <MainContainer>
        <HeroSection
          pageHeadline={data.page_headline}
          subHeadline={data.page_sub_headline}
          heroImage={data.page_image}
          heroAlt={data.page_image_alt}
        />
        <SubHero
          smallBio={data.page_description}
          newsLetterTitle={data.newsletter_title}
          newsLetterBlurb={data.newsletter_blurb}
        />
        <section className="w-full max-w-[1350px] flex flex-col lg:flex-row lg:items-center px-4 py-8">
          <div className="w-full lg:flex items-center justify-start">
            <h2 className="text-5xl lg:text-7xl font-bold text-black">
              Projects
            </h2>
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
      </MainContainer>
    </>
  );
}

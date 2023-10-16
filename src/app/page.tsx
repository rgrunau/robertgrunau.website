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
        <section className="w-full bg-slate-50 flex flex-wrap justify-between items-start">
          <div className="w-full mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <div className="w-full lg:w-1/2">
              <ProjectsSection projects={projects} />
            </div>
            <div className="w-full lg:w-1/2 bg-dark">
              <BlogSection blogPosts={blogPosts} />
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

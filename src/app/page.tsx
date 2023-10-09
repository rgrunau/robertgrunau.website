import MainContainer from "@/app/components/common/MainContainer";
import HeroSection from "@/app/components/home/components/HeroSection";
import SubHero from "@/app/components/home/components/SubHero";

import { getHomePageData, getBlogPosts } from "@/sanity/sanity-queries";
import BlogSection from "./components/home/components/BlogSection";

export default async function Home() {
  const data = await getHomePageData();
  const blogPosts = await getBlogPosts();
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
        <BlogSection blogPosts={blogPosts} />
      </MainContainer>
    </>
  );
}

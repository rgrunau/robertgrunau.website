import MainContainer from "@/app/components/common/MainContainer";
import HeroSection from "@/app/components/home/components/HeroSection";
import SubHero from "@/app/components/home/components/SubHero";

import { getHomePageData } from "@/sanity/sanity-queries";

export default async function Home() {
  const data = await getHomePageData();
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
        <section className="w-full bg-slate-50 py-5">
          <div className="w-full max-w-[1350px] mx-auto p-4 flex flex-col items-center justify-center">
            <div className="w-full">
              <h2 className="text-2xl">Latest Posts</h2>
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

export const dynamic = "force-dynamic";

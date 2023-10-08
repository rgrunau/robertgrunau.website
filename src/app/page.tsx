import MainContainer from "@/components/common/MainContainer";
import HeroSection from "@/components/home/components/HeroSection";
import NewsLetterSignUp from "@/components/home/components/NewsletterSignUp";
import { getHomePageData } from "@/sanity/sanity-queries";
import { PortableText } from "@portabletext/react";

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
        <section className="w-full bg-rg-orange lg:py-8 flex flex-col lg:flex-row items-center lg:justify-center">
          <div className="w-full lg:max-w-[1350px] flex flex-col lg:flex-row">
            <article className="w-full lg:w-1/2 flex flex-col items-center justify-center p-2 text-2xl my-4 px-2 font-light">
              <PortableText value={data.page_description} />
            </article>
            <div className="w-full lg:w-1/2 flex flex-col my-3 px-2">
              <div>
                <h3>{data.newsletter_title}</h3>
              </div>
              <div className="w-full flex flex-col items-center justify-center p-2">
                <article className="w-full text-2xl">
                  <PortableText value={data.newsletter_blurb} />
                </article>
                <div className="w-full">
                  <div className="w-full my-6">
                    <NewsLetterSignUp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

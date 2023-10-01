import MainContainer from "@/components/common/MainContainer";
import Navigation from "@/components/layout/Navigation";
import { getHomePageData } from "@/sanity/sanity-queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Home() {
  const data = await getHomePageData();

  return (
    <>
      <MainContainer>
        <div className="w-full lg:w-11/12 flex flex-col lg:flex-row lg:flex-wrap items-center justify-start p-2 text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <h1 className="text-rg-orange text-[100px] lg:text-[175px] leading-[100px] lg:leading-[150px]">
              {data.page_headline}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Navigation />
          </div>
          <div className="w-full lg:my-1 lg:py-8 lg:flex lg:items-center lg:justify-between">
            <div className="none lg:flex lg:1/2 lg:items-center lg:justify-center">
              <div className="w-[500px] h-[350px] overflow-hidden">
                <Image
                  src={data.page_image}
                  alt={data.page_image_alt}
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-dark text-[75px] lg:text-[125px] lg:justify-self-end leading-[75px] lg:leading-[125px]">
                {data.page_sub_headline}
              </h2>
            </div>
          </div>
        </div>
        <section className="w-full bg-rg-orange lg:py-8 flex lg:flex-row items-center lg:justify-center">
          <div className="w-full lg:max-w-[1350px] flex lg:flex-row">
            <article className="w-full lg:w-1/2 flex flex-col items-center justify-center p-2 text-2xl">
              <PortableText value={data.page_description} />
            </article>
          </div>
        </section>
      </MainContainer>
    </>
  );
}

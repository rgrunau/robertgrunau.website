import MainContainer from "@/components/common/MainContainer";
import Navigation from "@/components/layout/Navigation";
import { getHomePageData } from "@/sanity/sanity-queries";

export default async function Home() {
  const data = await getHomePageData();

  return (
    <>
      <MainContainer>
        <div className="flex flex-col items-center justify-start p-2 text-center">
          <div className="w-full">
            <h1 className="text-rg-orange text-[100px] leading-[100px]">
              {data.page_headline}
            </h1>
          </div>
          <div className="w-full">
            <Navigation />
          </div>
          <div className="w-full">
            <h2 className="text-rg-blue text-[75px] leading-[75px]">
              {data.page_sub_headline}
            </h2>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

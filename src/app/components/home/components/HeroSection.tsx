import Navigation from "@/app/components/layout/Navigation";
import Image from "next/image";

interface HeroSectionProps {
  pageHeadline: string;
  heroImage: string;
  heroAlt: string;
  subHeadline: string;
}

const HeroSection = ({
  pageHeadline,
  subHeadline,
  heroImage,
  heroAlt,
}: HeroSectionProps) => {
  return (
    <section className="w-full lg:w-11/12 flex flex-col lg:flex-row lg:flex-wrap items-center justify-start p-2 text-center lg:text-left">
      <div className="w-full lg:w-1/2">
        <h1 className="text-rg-orange text-[100px] lg:text-[175px] leading-[100px] lg:leading-[150px]">
          {pageHeadline}
        </h1>
      </div>
      <div className="w-full lg:w-1/2 ">
        <Navigation />
      </div>
      <div className="w-full lg:my-1 lg:py-8 lg:flex lg:items-center lg:justify-between">
        <div className="none lg:flex lg:1/2 lg:items-center lg:justify-center">
          <div className="hidden lg:block w-[500px] h-[350px] overflow-hidden">
            <Image
              src={heroImage}
              alt={heroAlt || ""}
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-dark text-[75px] lg:text-[125px] lg:justify-self-end leading-[75px] lg:leading-[125px]">
            {subHeadline}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

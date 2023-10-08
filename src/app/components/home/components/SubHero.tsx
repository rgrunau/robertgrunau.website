import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import NewsletterSection from "./NewsletterSection";

interface SubHeroProps {
  smallBio: PortableTextBlock[];
  newsLetterTitle: string;
  newsLetterBlurb: PortableTextBlock[];
}

export default function SubHero({
  smallBio,
  newsLetterTitle,
  newsLetterBlurb,
}: SubHeroProps) {
  return (
    <section className="w-full bg-rg-orange lg:py-8 flex flex-col lg:flex-row items-center lg:justify-center">
      <div className="w-full lg:max-w-[1350px] flex flex-col items-center lg:flex-row">
        <article className="w-full lg:w-1/2 flex flex-col items-center justify-center p-2 text-2xl my-4 px-2 font-light lg:text-xl">
          <PortableText value={smallBio} />
        </article>
        <NewsletterSection
          newsletterTitle={newsLetterTitle}
          newsletterBlurb={newsLetterBlurb}
        />
      </div>
    </section>
  );
}

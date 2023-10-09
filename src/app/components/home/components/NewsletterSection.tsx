import { PortableText } from "@portabletext/react";
import NewsLetterSignUp from "./NewsletterSignUp";
import { PortableTextBlock } from "sanity";

interface NewsletterSectionProps {
  newsletterTitle: string;
  newsletterBlurb: PortableTextBlock[];
}

export default function NewsletterSection({
  newsletterTitle,
  newsletterBlurb,
}: NewsletterSectionProps) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col my-4 px-2">
      <div className="w-full px-2">
        <h3 className="text-2xl font-semibold">{newsletterTitle}</h3>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-2">
        <article className="w-full text-2xl lg:text-xl">
          <PortableText value={newsletterBlurb} />
        </article>
        <div className="w-full">
          <div className="w-full my-6">
            <NewsLetterSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

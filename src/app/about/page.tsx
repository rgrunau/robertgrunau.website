import { request } from "@/lib/datocms";
import { FaUserAstronaut } from "react-icons/fa";
import { AboutPage } from "@/app/components/about/const/interfaces";
import MainContainer from "@/app/components/common/MainContainer";

const ABOUT_QUERY = `
  query AboutPage {
    about {
      aboutText
      id
      pageTitle
    }
    author {
      authorname
    }
  }
`;

async function getAboutPageData(): Promise<AboutPage> {
  const data = (await request({
    query: ABOUT_QUERY,
  })) as AboutPage;

  return data;
}

export default async function About() {
  const data = await getAboutPageData();
  const { about, author } = data;
  return (
    <MainContainer>
      <section className="flex flex-col w-full sm:w-9/12 md:w-5/6 xl:w-full xl:max-w-7xl sm:mx-auto items-center gap-8 p-8">
        <div className="flex flex-col items-center justify-center lg:mx-auto">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center p-4">
            <div className="self-start w-1/2 py-6 sm:py-2">
              <h1 className="text-yellow-200 text-5xl">{`Hello! I'm ${author.authorname}`}</h1>
              <div className="hidden sm:flex sm:w-full sm:justify-center items-center sm:my-8">
                <FaUserAstronaut className="inline-block w-60 h-60 text-text-white animate-wiggle" />
              </div>
            </div>
            <div className="w-full flex flex-col sm:w-1/2">
              <article
                className="text-lg text-text-white"
                dangerouslySetInnerHTML={{ __html: about.aboutText }}
              />
              <div>
                <a
                  className="w-full text-purple border-yellow-300 bg-yellow-300 border-2 rounded-lg p-6"
                  href="mailto:robertgrunau@hey.com"
                >
                  reach out
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainContainer>
  );
}

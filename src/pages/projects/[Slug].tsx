import { request } from 'graphql-request'
import { plexMono } from '..';
import { useQuerySubscription } from 'react-datocms';



export async function getStaticPaths() {
  const data = await request({ query: `{ allProjects { slug } }` });

  return {
    paths: data.allProjects.map((project) => `/projects/${project.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview=false }) {
  const graphqlRequest = {
    query: `
      query ProjectBySlug($slug: String) {
        project(filter: {slug: {eq: $slug}}) {
          title
          slug
          coverImage {
            responsiveImage {
              alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
      }
    `,
    preview,
    variables: {
      slug: params.slug
    }
  }

  return {
    props: {
      subscription: preview ? {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_DATOCMS_API_TOKEN,

      }: {
        enabled: false,
        initialData: await request(graphqlRequest)
      },
    }
  }
}

export default function Post({subscription, preview=false}) {
  const { data } = useQuerySubscription(subscription); 

  console.log(data);
  return (
    <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between md:justify-start ${plexMono.className}`}
      >
      <div>
        <h1>Post</h1>
      </div>
    </main>
  )
}
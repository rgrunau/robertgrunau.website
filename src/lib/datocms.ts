import { GraphQLClient } from "graphql-request";


interface RequestProps {
  query: string
  variables?: any
}
export const request = ({query, variables}: RequestProps) => {
  const endpoint = 'https://graphql.datocms.com/'
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
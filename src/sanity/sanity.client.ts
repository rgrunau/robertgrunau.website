import { createClient, type ClientConfig } from '@sanity/client'


const config: ClientConfig = {
  projectId: 'vlwcrgfi',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-03-25',
}

const client = createClient(config)

export default client
import {createClient} from "contentful"

const client = createClient({
  space: __CONTENTFUL_SPACE_ID__,
  accessToken: __CONTENTFUL_ACCESS_TOKEN__,
})

export {client}

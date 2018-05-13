import {client} from "./client"
import {EntryCollection} from "contentful"

const resource = <T>(contentType: string, query: object = {}) => async (): Promise<EntryCollection<T>> => {
  return client.getEntries({...query, content_type: contentType})
}

export {resource}

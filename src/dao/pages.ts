import {client} from "./helpers"
import {IPageDto} from "dto/pages"
import {EntryCollection} from "contentful"

const getPages = async (): Promise<EntryCollection<IPageDto>> => {
  return client.getEntries({content_type: "page", include: 0})
}

export {getPages}

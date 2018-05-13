import {client, includeReferences, sortEntries} from "./helpers"
import {EntryCollection} from "contentful"

const NUMBER_OF_LEVELS = 3

const getEntries = async (ids: string[], include: number = NUMBER_OF_LEVELS): Promise<EntryCollection<any>> => {
  return client.getEntries({"sys.id[in]": ids.join(","), include})
    .then(includeReferences("Entry"))
    .then(sortEntries(ids))
}

export {getEntries}

import {EntryCollection} from "contentful"
import {findReferencedItems, IncludeType} from "./findReferencedItems"

export const includeReferences = (type: IncludeType) => (response: EntryCollection<any>) => {
  const {items, includes} = response

  return {
    ...response,
    items: items.map(findReferencedItems(includes, type)),
  }
}

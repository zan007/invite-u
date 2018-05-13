import {Entry} from "contentful"
import {findReferencedItem} from "./findReferencedItem"
import {fieldHasLinks} from "./fieldHasLinks"

export type IncludeType = "Entry" | "Asset"

export const findReferencedItems = (includes: any, type: IncludeType) => (entry: Entry<any>) => {
  return {
    ...entry,
    fields: Object.keys(entry.fields).reduce((acc, key) => {
      const field = entry.fields[key]

      if (fieldHasLinks(field)) {
        return {
          ...acc,
          [key]: field
            .map((link: any) => findReferencedItem(includes[type], link.sys.id))
            .filter((item: any) => item)
            .map(findReferencedItems(includes, type)),
        }
      }

      return {...acc, [key]: field}
    }, {} as any),
  }
}

import {EntryCollection} from "contentful"

export const sortEntries = (ids: string[]) => (response: EntryCollection<any>): EntryCollection<any> => {
  return {
    ...response,
    items: ids.reduce((acc, id) => {
      const entry = response.items.find((item) => item.sys.id === id)

      if (entry) {
        return [...acc, entry]
      }

      return acc
    }, []),
  }
}

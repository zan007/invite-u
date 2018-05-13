import "jest"
import {EntryCollection} from "contentful"
import {sortEntries} from "../sortEntries"

const ids = ["1", "2", "3"]
const entries = {
  items: [
    {sys: {id: "3"}},
    {sys: {id: "1"}},
    {sys: {id: "2"}},
  ],
} as EntryCollection<any>

describe("sortEntries", () => {
  it("should sort entries", () => {
    const {items} = sortEntries(ids)(entries)

    expect(items[0].sys.id).toBe("1")
    expect(items[1].sys.id).toBe("2")
    expect(items[2].sys.id).toBe("3")
  })
})

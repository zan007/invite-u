import "jest"
import {Entry} from "contentful"
import {findReferencedItems} from "../findReferencedItems"

const id = "123"
const subEntryId = "321"
const searchedEntry = {
  fields: {
    field: [{title: "entry"}],
    links: [{
      sys: {
        id: subEntryId,
        linkType: "Entry",
        type: "Link",
      },
    }],
  },
  sys: {id},
}
const searchedSubEntry = {
  fields: {field: [{title: "subentry"}]},
  sys: {id: subEntryId},
}
const emptyIncludes = {Entry: []}
const entryWithReference = {
  fields: {
    links: [{
      sys: {
        id,
        linkType: "Entry",
        type: "Link",
      },
    }],
  },
} as Entry<any>

const entryWithAsset = {
  fields: {
    links: [{
      sys: {
        id: "asset",
        linkType: "Asset",
        type: "Link",
      },
    }],
  },
} as Entry<any>

const Asset = {
  sys: {
    id: "asset",
    linkType: "Asset",
    type: "Link",
  },
  fields: {
    file: {
      url: "url",
    },
  },
}
const includes = {Entry: [searchedEntry, searchedSubEntry], Asset: [Asset]}

describe("findEntry", () => {
  it("should find referenced entry", () => {
    expect(
      findReferencedItems(includes, "Entry")(entryWithReference).fields.links[0].fields.field,
    ).toEqual(searchedEntry.fields.field)
  })

  it("should find referenced asset", () => {
    expect(
      findReferencedItems(includes, "Asset")(entryWithAsset).fields.links[0].fields.file.url,
    ).toBe("url")
  })

  it("should find referenced sub entry", () => {
    expect(
      findReferencedItems(includes, "Entry")(entryWithReference).fields.links[0].fields.links[0].fields.field,
    ).toEqual(searchedSubEntry.fields.field)
  })

  it("should return empty array when referenced entry doesnt exist", () => {
    expect(findReferencedItems(emptyIncludes, "Entry")(entryWithReference).fields.links).toHaveLength(0)
  })
})

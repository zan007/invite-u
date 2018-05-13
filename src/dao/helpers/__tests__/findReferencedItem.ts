import "jest"
import {findReferencedItem} from "../findReferencedItem"

const id = "123"
const includesWithEntry = [{
  fields: {},
  sys: {id},
}]
const includesWithOtherEntry = [{
  fields: {},
  sys: {id: "abc"},
}]

describe("findReferencedItem", () => {
  it("should find searched entry", () => {
    expect(findReferencedItem(includesWithEntry, id)).toBeTruthy()
    expect(findReferencedItem([], id)).toBeFalsy()
    expect(findReferencedItem(includesWithOtherEntry, id)).toBeFalsy()
    expect(findReferencedItem(undefined, id)).toBeFalsy()
  })
})

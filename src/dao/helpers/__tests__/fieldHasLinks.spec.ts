import "jest"
import {fieldHasLinks} from "../fieldHasLinks"

const fieldWithLinks = [{
  sys: {
    id: "12345",
    linkType: "Entry",
    type: "Link",
  },
}]

const fieldWithoutLinks = [{
  sys: {
    id: "12345",
    linkType: "Entry",
    type: "NotLink",
  },
}]

describe("fieldHasLinks", () => {
  it("should return false for incorrect values", () => {
    expect(fieldHasLinks(undefined)).toBeFalsy()
    expect(fieldHasLinks([])).toBeFalsy()
    expect(fieldHasLinks({})).toBeFalsy()
    expect(fieldHasLinks("")).toBeFalsy()
    expect(fieldHasLinks(123)).toBeFalsy()
    expect(fieldHasLinks(fieldWithoutLinks)).toBeFalsy()
  })

  it("should return false for correct values", () => {
    expect(fieldHasLinks(fieldWithLinks)).toBeTruthy()
  })
})

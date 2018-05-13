import "jest"
import * as React from "react"
import { shallow } from "enzyme"

import { Icon } from "../index"

describe("<Icon/>", () => {
  it ("should render arrow-down icon", () => {
    const wrapper = shallow(<Icon name={"arrow-down"}/>)

    expect(wrapper.find(".icon-arrow-down").exists()).toEqual(true)
  })
  it ("should render arrow-down icon and text inside", () => {
    const wrapper = shallow(<Icon name={"arrow-down"}>test text</Icon>)
    const iconElement = wrapper.find(".icon-arrow-down")

    expect(iconElement.text()).toBe("test text")
  })
})

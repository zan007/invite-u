import "jest"
import * as React from "react"
import { shallow } from "enzyme"

import { Tab, Tabs } from "../index"

const tabElement = () => (
  <Tab name="tab name">
    <div/>
  </Tab>
)

const tabsElement = () => {
  return (
    <Tabs>
      <Tab name="tab first">
        <div>first tab content</div>
      </Tab>
      <Tab name="tab second">
        <div>second tab content</div>
      </Tab>
    </Tabs>
  )
}

describe("<Tab/>", () => {
  it ("should render Tab with text inside it", () => {
    const wrapper = shallow(tabElement())
    const link = wrapper.find(".tabs-link")

    expect(link.text()).toBe("tab name")
  })
})

describe("<Tabs/>", () => {
  it ("should render Tabs with tabs-container class inside it", () => {
    const wrapper = shallow(tabsElement())

    expect(wrapper.hasClass("tabs-container")).toBe(true)
  })

  it ("should activate first tab default", () => {
    const wrapper = shallow(tabsElement())
    const isActiveProp = "isActive"
    const firstTabIndex = 0

    expect(wrapper.state("activeTabIndex")).toBe(firstTabIndex)
    expect(wrapper.find("Tab").at(firstTabIndex).prop(isActiveProp)).toBe(true)
  })

  it ("should activate second tab", () => {
    const wrapper = shallow(tabsElement())
    const isActiveProp = "isActive"
    const secondTabIndex = 1

    wrapper.setState({activeTabIndex: secondTabIndex})

    expect(wrapper.state("activeTabIndex")).toBe(secondTabIndex)
    expect(wrapper.find("Tab").at(secondTabIndex).prop(isActiveProp)).toBe(true)
  })

  it ("should render first tab content", () => {
    const wrapper = shallow(tabsElement())

    expect(wrapper.find(".tabs-content").text()).toBe("first tab content")
  })

  it ("should render second tab content", () => {
    const wrapper = shallow(tabsElement())
    const secondTabIndex = 1

    wrapper.setState({activeTabIndex: secondTabIndex})
    expect(wrapper.find(".tabs-content").text()).toBe("second tab content")
  })
})

import * as React from "react"

import {StyleguideNavigation} from "./StyleguideNavigation"
import {
  StyleguideColors,
  StyleguideIcons,
  StyleguideLayout,
  StyleguideTabs,
  StyleguideBreakpoint,
} from "./styleguideSections"

interface IStyleguideProps {
}

interface IStyleguideState {
  activeSection: string
}

class Styleguide extends React.Component<IStyleguideProps, IStyleguideState> {
  constructor(props: IStyleguideProps) {
    super(props)

    this.state = {activeSection: "colors"}
  }

  handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const activeSection = event.currentTarget.value

    this.setState({activeSection})
  }

  render() {
    const {activeSection} = this.state
    let activeSectionComponent = null

    switch (activeSection) {
      case "colors":
        activeSectionComponent = <StyleguideColors />
        break
      case "layout":
        activeSectionComponent = <StyleguideLayout />
        break
      case "tabs":
        activeSectionComponent = <StyleguideTabs />
        break
      case "breakpoint":
        activeSectionComponent = <StyleguideBreakpoint />
        break
      case "icons":
        activeSectionComponent = <StyleguideIcons />
        break
      default:
        activeSectionComponent = <StyleguideColors />
    }

    return (
      <div>
        <StyleguideNavigation changeHandler={this.handleChange} />
        {activeSectionComponent}
      </div>
    )
  }
}

export {Styleguide}

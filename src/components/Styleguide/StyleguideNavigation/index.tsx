import * as React from "react"

import "./StyleguideNavigation.scss"

interface IProps {
  changeHandler(event: React.FormEvent<HTMLSelectElement>): void
}

const StyleguideNavigation: React.SFC<IProps> = (props) => {
  return (
    <div className="styleguide-navigation-wrapper">
      <div className="styleguide-navigation">
        <label className="styleguide-navigation-label">
          Select:
          <select
            onChange={props.changeHandler}
            className="styleguide-navigation-select"
          >
            <option
              value="colors"
              aria-selected="true"
            >
              Color Palette
            </option>
            <option
              value="layout"
              aria-selected="false"
            >
              Example Layout
            </option>
            <option
              value="tabs"
              aria-selected="false"
            >
              Tabs
            </option>
            <option
              value="icons"
              aria-selected="false"
            >
              Icons
            </option>
            <option
              value="breakpoint"
              aria-selected="false"
            >
              breakpoint
            </option>
          </select>
        </label>
      </div>
    </div>
  )
}

export {StyleguideNavigation}

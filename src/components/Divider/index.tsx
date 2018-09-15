import * as React from "react"
import * as classnames from "classnames"
import "./Divider.scss"

interface IDividerProps {
  top?: boolean
  bottom?: boolean
  fancy?: boolean
}

const Divider: React.SFC<IDividerProps> = ({top = false, bottom = false, fancy = false}) => {

  function renderNormalDivider() {
    const normalDividerClassNames = classnames({
      divider: true,
      top,
      bottom,
    })

    return (
      <svg
        className={normalDividerClassNames}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 100 100"
        preserveAspectRatio={"none"}
      >
        <polygon className={"top-polygon"} points="0,0 100,0 50,50" />
        <polygon className={"right-polygon"} points="100,100 100,0 50,50" />
        <polygon className={"left-polygon"} points="0,0 0,100 50,50" />
        <polygon className={"bottom-polygon"} points="0,100 100,100 50,50" />
      </svg>
    )
  }

  function renderFancyDivider() {
    const fancyDividerClassNames = classnames({
      ["fancy-divider"]: true,
      top,
      bottom,
    })

    return (
      <svg
        className={fancyDividerClassNames}
        width={"100%"}
        height={"100%"}
        viewBox="0 0 100 100"
        preserveAspectRatio={"none"}
      >
        <polygon className={"top-polygon"} points="0,0 100,0 50,100" />
        <polygon className={"right-bottom-polygon"} points="100,100 100,0 50,100"/>
        <polygon className={"right-top-polygon"} points="100,40 100,0 50,100" />
        <polygon className={"left-top-polygon"} points="0,0 0,100 50,100" />
        <polygon className={"left-bottom-polygon"} points="0,40 0,100 50,100"/>
      </svg>
    )
  }

  return (
    <>
      {fancy && renderFancyDivider()}
      {!fancy && renderNormalDivider()}
    </>
  )
}

export {Divider}

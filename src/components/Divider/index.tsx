import * as React from "react"
import * as classnames from "classnames"
import "./Divider.scss"

interface IDividerProps {
  top?: boolean
  bottom?: boolean
}

const Divider: React.SFC<IDividerProps> = ({top = false, bottom = false}) => {
  const dividerClassNames = classnames({
    divider: true,
    top,
    bottom,
  })

  return (
    <svg
      className={dividerClassNames}
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

export {Divider}

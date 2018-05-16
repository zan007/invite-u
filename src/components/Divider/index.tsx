import * as React from "react"

import "./Divider.scss"

interface IDividerProps {

}

const Divider: React.SFC<IDividerProps> = () => {
  return (
    <svg
      className={"divider"}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 100 100"
      preserveAspectRatio={"none"}
    >
        {/*<polygon className={"top"} points="0,0 100,0 50,10" />
        <polygon className={"right"} points="100,20 100,0 50,10" />
        <polygon className={"left"} points="0,0 0,20 50,10" />
        <polygon className={"bottom"} points="0,20 100,20 50,10" />*/}
      <polygon className={"top"} points="0,0 100,0 50,50" />
      <polygon className={"right"} points="100,100 100,0 50,50" />
      <polygon className={"left"} points="0,0 0,100 50,50" />
      <polygon className={"bottom"} points="0,100 100,100 50,50" />
    </svg>
  )
}

export {Divider}

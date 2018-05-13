import * as React from "react"

import {Breakpoint} from "components/Breakpoint/index"

interface IProps {
}

const StyleguideBreakpoint: React.SFC<IProps> = () => {
  return (
    <>
      <Breakpoint small={true}>
        <div>small only matched element</div>
      </Breakpoint>

      <Breakpoint medium={true}>
        <div>medium only matched element</div>
      </Breakpoint>

      <Breakpoint large={true}>
        <div>large only matched element</div>
      </Breakpoint>

      <Breakpoint small={true} large={true}>
        <div>small and large matched element</div>
      </Breakpoint>
    </>
  )
}

export {StyleguideBreakpoint}

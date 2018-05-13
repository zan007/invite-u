import * as React from "react"
import {ISpinnerProps, Spinner} from "./Spinner"

const SpinnerWrapper: React.StatelessComponent<ISpinnerProps> = ({cause, color, overlay, children}) => (
  <div className="spinner-wrapper">
    {children}
    <Spinner cause={cause} color={color} overlay={overlay} />
  </div>
)

export {SpinnerWrapper}

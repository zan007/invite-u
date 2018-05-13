import * as React from "react"
import "./Counter.scss"

interface IProps {
  count: number
}

const Counter: React.SFC<IProps> = ({children, count}) => (
  <span className="counter" data-count={count}>{children}</span>
)

export {Counter}

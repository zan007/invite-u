import * as React from "react"
import "./Shape.scss"

export type ShapeColor = "blue" | "green" | "yellow" | "grey"

interface IProps {
  color: ShapeColor
}

const Shape: React.SFC<IProps> = ({color}) => (
  <span className={`rect-${color}`} />
)

export {Shape}

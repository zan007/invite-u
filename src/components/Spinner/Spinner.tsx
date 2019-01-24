import * as React from "react"
import * as classnames from "classnames"

export interface ISpinnerProps {
  cause?: boolean
  overlay?: boolean
  color?: string
}

const Spinner: React.StatelessComponent<ISpinnerProps> = ({cause = true, overlay = true, color}) => {
  if (cause) {
    const stroke = color || "blue"
    const className = classnames({
      showbox: true,
      overlay,
    })

    return (
      <div className={className}>
        <div className="loader">
          <div className="heart"/>
          <div className="heart"/>
          <div className="heart"/>
        </div>
      </div>
    )
  }

  return null
}

export {Spinner}

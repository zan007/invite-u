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
          <svg className="circular" width="50" height="50" viewBox="25 25 50 50">
            <circle
              className="path"
              stroke={stroke}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    )
  }

  return null
}

export {Spinner}

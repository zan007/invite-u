import * as React from "react"
import * as classnames from "classnames"

type COLUMNS_NUMBER = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface IProps {
  children?: any
  className?: string
  small?: COLUMNS_NUMBER
  medium?: COLUMNS_NUMBER
  large?: COLUMNS_NUMBER
  smallOrder?: number
  mediumOrder?: number
  largeOrder?: number
  shrink?: boolean
  expand?: boolean
}

const Col: React.StatelessComponent<IProps> = ({
  children,
  className = "",
  small,
  medium,
  large,
  smallOrder,
  mediumOrder,
  largeOrder,
  shrink = false,
  expand = false,
}: IProps) => {
  const classList = classnames({
    columns: true,
    shrink,
    expand,
    [className]: Boolean(className),
    [`medium-order-${smallOrder}`]: Boolean(smallOrder),
    [`medium-order-${mediumOrder}`]: Boolean(mediumOrder),
    [`medium-order-${largeOrder}`]: Boolean(largeOrder),
    [`small-${small}`]: Boolean(small),
    [`medium-${medium}`]: Boolean(medium),
    [`large-${large}`]: Boolean(large),
  })

  return <div className={classList}>{children}</div>
}

export {Col}

import * as React from "react"
import * as classnames from "classnames"

type VAlign = "middle" | "top" | "bottom" | "stretch"
type HAlign = "right" | "center" | "justify" | "spaced"

interface IProps {
  children: any
  className?: string
  vAlign?: VAlign
  hAlign?: HAlign
  collapse?: boolean
  nowrap?: boolean
  expanded?: boolean
}

const Row: React.StatelessComponent<IProps> = ({
  children,
  className = "",
  vAlign,
  hAlign,
  collapse = false,
  expanded = false,
}: IProps) => {
  const classList = classnames({
    row: true,
    expanded,
    collapse,
    [className]: Boolean(className),
    [`align-${hAlign}`]: Boolean(hAlign),
    [`align-${vAlign}`]: Boolean(vAlign),
  })

  return <div className={classList}>{children}</div>
}

export {Row}

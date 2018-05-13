import * as React from "react"
import {IMenuListItem, MenuListItem} from "./MenuListItem"

interface IProps {
  className?: string
  items: IMenuListItem[]
}

const MenuList: React.SFC<IProps> = ({className, items}) => {
  return (
    <ul role="menu" className={className}>
      {items.map((props, idx) => (<MenuListItem key={idx} {...props} />))}
    </ul>
  )
}

export {MenuList}

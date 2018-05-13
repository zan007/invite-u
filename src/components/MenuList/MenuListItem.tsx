import * as React from "react"
import {Link} from "react-router-dom"
import * as classnames from "classnames"

interface IMenuListItem {
  title: string | JSX.Element
  primary?: boolean
  url: string
  count?: number
}

const MenuListItem: React.SFC<IMenuListItem> = ({title, primary, url}) => (
  <li role="menuitem" className={classnames({primary})}>
    <Link to={url}>{title}</Link>
  </li>
)

export {MenuListItem, IMenuListItem}

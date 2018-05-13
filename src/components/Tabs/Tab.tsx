import * as React from "react"
import * as classnames from "classnames"

export interface ITabProps {
  name: string,
  isActive?: boolean
  tabIndex?: number,
  onClick?: (idx: number) => void,
  children: React.ReactElement<any>
}

const Tab: React.StatelessComponent<ITabProps> = ({isActive, onClick, tabIndex, name, children}) => {

  function handleTabClick() {
    if (onClick && typeof tabIndex === "number") {
      onClick(tabIndex)
    }
  }

  const tabClass = classnames({
    "tabs-link": true,
    "active": isActive,
  })

  return (
    <li role="button" onClick={handleTabClick}>
      <a className={tabClass}>
        {name}
      </a>
    </li>
  )
}

export {Tab}

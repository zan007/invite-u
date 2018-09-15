import * as React from "react"
import * as classnames from "classnames"

export type IconName = "arrow-down" |
  "arrow-left" |
  "arrow-right" |
  "arrow-up" |
  "cart-person" |
  "case" |
  "clock" |
  "close" |
  "download" |
  "email" |
  "facebook" |
  "gear-hands" |
  "google" |
  "linkedin" |
  "mute" |
  "paper-pencil" |
  "pause" |
  "person-connection-thin" |
  "person-connection" |
  "person-plus" |
  "phone" |
  "play" |
  "quote" |
  "russia-building" |
  "twitter" |
  "volume" |
  "couple" |
  "instagram" |
  "hearts" |
  "heart-paper" |
  "heart-notepad"

interface IProps {
  children?: any,
  name: IconName
}

const Icon: React.StatelessComponent<IProps> = ({name, children}: IProps) => {
  const classList = classnames({
    icon: true,
    [`icon-${name}`]: true,
  })

  return <i className={classList}>{children}</i>
}

export {Icon}

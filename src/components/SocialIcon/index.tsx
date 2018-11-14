import * as React from "react"
import {Icon, IconName} from "components/Icon"
import "./SocialIcon.scss"
import {ISocialLink} from "../../models/socialLink"

const SocialIcon: React.SFC<ISocialLink> = ({name, icon, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      role="button"
      rel="noopener noreferrer"
      className="social-icon icon-container"
    >
      <Icon name={icon}/>
    </a>
  )
}

export {SocialIcon}

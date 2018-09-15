import * as React from "react"
import * as classnames from "classnames"
import {Icon} from "components/Icon"
import {Row, Col} from "components/grid"
import "./SocialIcons.scss"

interface ISocialIconsProps {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedIn?: string
}

const SocialIcons: React.SFC<ISocialIconsProps> = ({facebook, twitter, instagram, linkedIn}) => {

  return (
    <div className={"social-icons"}>
      {facebook &&
        <a href={facebook} target="_blank" role="button" className="icon-container">
          <Icon name={"facebook"}/>
        </a>}
      {twitter &&
        <a href={twitter} target="_blank" role="button" className="icon-container">
          <Icon name={"twitter"}/>
        </a>}
      {instagram &&
        <a href={instagram} target="_blank" role="button" className="icon-container">
          <Icon name={"instagram"}/>
        </a>}
      {linkedIn &&
        <a href={linkedIn} target="_blank" role="button" className="icon-container">
          <Icon name={"linkedin"}/>
        </a>}
    </div>
  )
}

export {SocialIcons}

import * as React from "react"
import "./PersonDetails.scss"
import {Asset, Entry} from "contentful"
import {Row, Col} from "components/grid"
import {Avatar} from "components/Avatar"
import {ISocialProfile} from "models/socialProfile"
import {SocialIcons} from "components/SocialIcons"
import * as classnames from "classnames"

interface IPersonDetailsProps {
  avatar: Asset
  float: "left" | "right"
  name: string
  descriptionAuthor: string
  description: string
  socialProfiles: Entry<ISocialProfile>
}

const PersonDetails: React.SFC<IPersonDetailsProps> = ({
   avatar,
   float,
   name,
   descriptionAuthor,
   description,
   socialProfiles,
}) => {
  const containerClassNames = classnames({
    "person-details": true,
    "float-right": float === "right",
    "float-left": float === "left",
  })

  return (
    <Row className={containerClassNames} vAlign={"middle"}>
      <Col small={12} large={6} className={"avatar-column animation fade-in delay-1"}>
        <Avatar image={avatar.fields.file.url} title={avatar.fields.title}/>
      </Col>
      <Col small={12} large={6} className={"description-column animation fade-in delay-2"}>
        <div className={"person-name"}>
          {name}
        </div>
        <div className={"description-author"}>
          {descriptionAuthor}
        </div>
        <div className={"description"}>
          {description}
        </div>
        <div className={"social-icons"}>
          <SocialIcons {...socialProfiles.fields} />
        </div>
      </Col>
    </Row>
  )
}

export {PersonDetails}

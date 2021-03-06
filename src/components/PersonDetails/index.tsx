import * as React from "react"
import "./PersonDetails.scss"
import {Asset, Entry} from "contentful"
import {Row, Col} from "components/grid"
import {Avatar} from "components/Avatar"
import {SocialIcon} from "components/SocialIcon"
import * as classnames from "classnames"
import {AnimateOnScroll} from "../AnimateOnScroll"
import {ISocialLink} from "../../models/socialLink"

interface IPersonDetailsProps {
  avatar: Asset
  float: "left" | "right"
  name: string
  descriptionAuthor: string
  description: string
  socialProfiles: Array<Entry<ISocialLink>>
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
      <Col small={12} large={6} className={"avatar-column"}>
        <AnimateOnScroll visible={true} duration={300} effect={"scaleIn"}>
          <Avatar image={avatar.fields.file.url} title={avatar.fields.title}/>
        </AnimateOnScroll>
      </Col>
      <Col small={12} large={6} className={"description-column"}>
        <AnimateOnScroll visible={true} duration={500}>
          <>
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
              {socialProfiles.map((socialProfile, index) => {
                return (
                  <AnimateOnScroll visible={true} key={index} duration={(index + 1) * 200} effect={"scaleIn"}>
                    <SocialIcon {...socialProfile.fields}/>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </>
        </AnimateOnScroll>
      </Col>
    </Row>
  )
}

export {PersonDetails}

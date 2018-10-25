import * as React from "react"
import {Row, Col} from "components/grid"
import {Icon, IconName} from "components/Icon"

interface IProps {
  icon?: IconName
  title?: string
  children?: any
}

const SectionTitle: React.SFC<IProps> = ({icon, title, children}) => (
  <Row hAlign={"center"} className={"section-title animation fade-in"}>
    <Col small={12} className={"text-center"}>
      <div className={"section-icon"}>
        {icon && <Icon name={icon}/>}
      </div>
    </Col>
    <Col small={12} className={"text-center"}>
      {title &&
      <h2 className={"section-title"}>{title}</h2>
      }
    </Col>
    {children}
  </Row>
)

export {SectionTitle}

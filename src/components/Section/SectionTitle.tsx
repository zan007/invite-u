import * as React from "react"
import {Row, Col} from "components/grid"
import {Icon, IconName} from "components/Icon"
import {AnimateOnScroll} from "../AnimateOnScroll"

interface IProps {
  icon?: IconName
  title?: string
  children?: any
}

const SectionTitle: React.SFC<IProps> = ({icon, title, children}) => (
  <Row hAlign={"center"} className={"section-title"}>
    <Col small={12} className={"text-center"}>
      <AnimateOnScroll visible={true} effect={"scaleIn"} duration={500}>
        <div className={"section-icon"}>
          {icon && <Icon name={icon}/>}
        </div>
      </AnimateOnScroll>
    </Col>
    <Col small={12} className={"text-center"}>
      {title &&
      <AnimateOnScroll visible={true} duration={500}>
        <h2 className={"section-title"}>{title}</h2>
      </AnimateOnScroll>
      }
    </Col>
    {children}
  </Row>
)

export {SectionTitle}

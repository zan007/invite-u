import * as React from "react"
import {Row, Col} from "components/grid"
import {Icon, IconName} from "components/Icon"
import "./WidgetFooter.scss"
import {AnimateOnScroll} from "../../components/AnimateOnScroll"

interface IProps {
  name: string
  title: string
  icon?: IconName
}

const WidgetFooter: React.SFC<IProps> = ({title, icon}) => (
  <footer className={"footer"}>
    <Row hAlign={"center"}>
      <AnimateOnScroll visible={true} duration={700}>
        <Col className={"section-title text-center"}>
          {icon &&
          <div className={"section-icon"}>
            <Icon name={icon}/>
          </div>
          }
          <h3>{title}</h3>
        </Col>
      </AnimateOnScroll>
    </Row>
  </footer>
)
export {WidgetFooter}

import * as React from "react"
import {Row, Col} from "components/grid"
import {Icon, IconName} from "components/Icon"
import "./WidgetFooter.scss"

interface IProps {
  name: string
  title: string
  icon?: IconName
}

const WidgetFooter: React.SFC<IProps> = ({title, icon}) => (
  <footer className={"footer"}>
    <Row hAlign={"center"}>
      <Col className={"section-title text-center animation fade-in"}>
        {icon &&
        <div className={"section-icon"}>
          <Icon name={icon}/>
        </div>
        }
        <h3>{title}</h3>
      </Col>
    </Row>
  </footer>
)
export {WidgetFooter}

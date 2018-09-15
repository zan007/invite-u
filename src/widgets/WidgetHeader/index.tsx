import * as React from "react"
import {Asset} from "contentful"
import "./WidgetHeader.scss"
import {BackgroundImage} from "../../components/BackgroundImage"
import {Row, Col} from "components/grid/index"
import {Divider} from "components/Divider"
import {Icon} from "components/Icon"

interface IProps {
  title: string
  subtitle: string
  background: Asset
}

class WidgetHeader extends React.Component<IProps> {
  render() {
    const {title, subtitle, background} = this.props

    return (
      <header className="main-header">
        <BackgroundImage
          position={"left"}
          image={background}
        />
        <Row hAlign={"center"} collapse={true} vAlign={"middle"} className={"full-height"}>
          <Col small={12}>
            <h1 className="title text-center">{title}</h1>
            <hr/>
            <h3 className="subtitle text-center">{subtitle}</h3>
          </Col>
        </Row>
      </header>
    )
  }
}

export default WidgetHeader

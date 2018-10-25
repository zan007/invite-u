
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetQuote.scss"

interface IProps {
  name?: string
  title?: string
}

interface IState {}

class WidgetQuote extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Row hAlign={"center"} vAlign={"middle"} className={"widget-quote animation fade-in"}>
        <Col small={12} medium={6} className={"text-center"}>
          {this.props.title && <h3>{this.props.title}</h3>}
        </Col>
      </Row>
    )
  }
}

export default WidgetQuote

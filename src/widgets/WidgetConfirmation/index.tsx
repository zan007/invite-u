
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetConfirmation.scss"
import {AnimateOnScroll} from "../../components/AnimateOnScroll"

interface IProps {
  title?: string,
}

interface IState {}

class WidgetConfirmation extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <AnimateOnScroll visible={true} duration={500}>
        <Row hAlign={"center"} vAlign={"middle"} className={"widget-quote"}>
          <Col small={12} medium={6} className={"text-center"}>
            {this.props.title && <h3>{this.props.title}</h3>}
          </Col>
        </Row>
      </AnimateOnScroll>
    )
  }
}

export default WidgetConfirmation

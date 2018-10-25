
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetStory.scss"
import {Asset} from "contentful"
import Markdown from "react-markdown";
import {Gallery} from "../../components/Gallery"

interface IProps {
  name: string,
  text: string,
  images: Asset[]
}

interface IState {}

class WidgetStory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    const {images, text} = this.props

    return (
      <div className={"widget-story"}>
        <Row hAlign={"center"} vAlign={"middle"} >
          <Col small={6} className={"text-center animation fade-in delay-2"}>
            <Markdown
              escapeHtml={true}
              source={text}
            />
          </Col>
        </Row>
        <div>
          <Gallery images={images}/>
        </div>
      </div>
    )
  }
}

export default WidgetStory

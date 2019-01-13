
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetStory.scss"
import {Asset} from "contentful"
import Markdown from "react-markdown";
import {Gallery} from "../../components/Gallery"
import {AnimateOnScroll} from "../../components/AnimateOnScroll"

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
        <AnimateOnScroll visible={true} duration={500}>
          <Row hAlign={"center"} vAlign={"middle"} >
              <Col small={6} className={"text-center"}>
                <Markdown
                  escapeHtml={true}
                  source={text}
                />
              </Col>

          </Row>
        </AnimateOnScroll>
        <div>
          <Gallery images={images}/>
        </div>
      </div>
    )
  }
}

export default WidgetStory
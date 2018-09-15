import * as React from "react"
import {Asset} from "contentful"
import {Col, Row} from "../grid"

interface IProps {
  image: Asset,
  nextImageCallback: () => void,
  prevImageCallback: () => void
}

const fullscreenPreview: React.SFC<IProps> = ({image, nextImageCallback, prevImageCallback}) => (
  <Row vAlign={"middle"} hAlign={"center"} className={"fullscreen-preview"}>
    <Col small={12}>
      <div className={"previous"} onClick={prevImageCallback} role={"button"}/>
      <img src={image.fields.file.url} alt={image.fields.file.fileName}/>
      <div className={"next"} onClick={nextImageCallback} role={"button"}/>
    </Col>
  </Row>
)

export {fullscreenPreview}

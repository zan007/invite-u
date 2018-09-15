import * as React from "react"
import "./Modal.scss"
import {Icon} from "../Icon"

interface IProps {
  content: Element
}

class Modal extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    const {content} = this.props

    return (
      <div className={"modal-container"}>
        <Icon name={"close"}/>
        <div className={"modal-content"}>
          {content}
        </div>
      </div>
    )
  }
}

export {Modal}

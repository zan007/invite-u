import * as React from "react"
import {prepareShapes} from "./prepareShapes"
import "./AnimatedShapes.scss"

interface IProps {}

interface IState {
  id: string
}

class AnimatedShapes extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      id: (new Date().getTime()).toString(36),
    }
  }

  render() {
    const {id} = this.state

    /* tslint:disable:react-no-dangerous-html */
    return (
      <div className="shapes-wrapper" dangerouslySetInnerHTML={{__html: prepareShapes(id)}} />
    )
  }
}

export {AnimatedShapes}

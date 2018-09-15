import * as React from "react"
import * as ReactDOM from "react-dom"

interface IProps {
  children: React.ReactElement<any>
}

class ModalPortal extends React.PureComponent<IProps> {
  private el: HTMLDivElement

  constructor(props: IProps) {
    super(props)

    this.el = document.createElement("div")
    this.el.classList.add("modal")
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export {ModalPortal}

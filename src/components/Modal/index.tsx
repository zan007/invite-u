import * as React from "react"
import "./Modal.scss"
import {Icon} from "../Icon"
import {IModals} from "../../redux/modals/model"
import {closeModal} from "../../redux/modals/actions"
import {connect} from "react-redux"
import * as ReactDOM from "react-dom"

interface IProps {
  item: IModals
}

const mapDispatchToProps = {closeModal}
type DispatchProps = typeof mapDispatchToProps

type Props = IProps & DispatchProps

class Modal extends React.PureComponent<Props> {
  private ref: HTMLElement

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className={"modal full-height"} ref={this.setRef}>
        <div onClick={this.onCloseClick} role={"button"}>
          <Icon name={"close"}/>
        </div>
        <div id={"content"} className={"modal-content full-height"}>
          {this.renderContent()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.ref.classList.add("active")
  }

  private renderContent = () => {
    return this.props.item.content
  }

  private onCloseClick = () => {
    this.ref.classList.remove("active")

    setTimeout(() => {
      return this.props.closeModal(this.props.item)
    }, 300)
  }

  private setRef = (el: HTMLDivElement) => {
    this.ref = el
  }
}
const connectedToStore =
  connect<{}, DispatchProps>(() => ({}), mapDispatchToProps)(Modal)

export {connectedToStore as Modal}

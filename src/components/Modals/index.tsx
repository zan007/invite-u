import * as React from "react"
import {IModalsState, IModals} from "redux/modals/model"
import {ModalPortal} from "./ModalPortal"
import {connect} from "react-redux"
import {IStoreState} from "../../redux/model"
import {Modal} from "../Modal"

interface IProps {}

interface IState {}

const mapStateToProps = (state: IStoreState): IModalsState => {
  const {activeModals} = state.modals

  return {activeModals}
}

type Props = IProps & IModalsState

class Modals extends React.PureComponent<Props, IState> {
  render() {
    return (
      this.props.activeModals.map((modal: IModals, i: number) => (
        <ModalPortal key={i}>
          <Modal content={modal.content}/>
        </ModalPortal>
      ))
    )
  }
}

const connected = connect<IModalsState>(mapStateToProps, {})(Modals)

export {connected as Modals}

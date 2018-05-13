import * as React from "react"
import {IMediaState} from "redux/media/model"
import {connect} from "react-redux"
import {IStoreState} from "../../redux/model"

interface IProps {
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  children: any,
}

interface IState {}

const mapStateToProps = (state: IStoreState): IMediaState => {
  const {breakpoints} = state.media

  return {breakpoints}
}

type Props = IProps & IMediaState

class Breakpoint extends React.PureComponent<Props, IState> {
  render() {
    return (
      (this.checkVisibility() &&
      this.props.children) || ""
    )
  }

  private checkVisibility() {
    const {large: showLarge, medium: showMedium, small: showSmall, breakpoints} = this.props
    const {large, medium, small} = breakpoints

    return (showLarge && large) || (showMedium && medium) || (showSmall && small)
  }
}

const connected = connect<IMediaState>(mapStateToProps, {})(Breakpoint)

export {connected as Breakpoint}

import * as React from "react"
import {connect} from "react-redux"
import {setSmallBreakPoint, setMediumBreakPoint, setLargeBreakPoint} from "redux/media/actions"

const mapDispatchToProps = {setSmallBreakPoint, setMediumBreakPoint, setLargeBreakPoint}
type DispatchProps = typeof mapDispatchToProps

const minWidthMap = {
  small: "(max-width: 39.9375em)",
  medium: "(min-width: 40em) and (max-width: 63.9375em)",
  large: "(min-width: 64em)",
}

const smallListener = window.matchMedia(minWidthMap.small)
const mediumListener = window.matchMedia(minWidthMap.medium)
const largeListener = window.matchMedia(minWidthMap.large)

class MatchMedia extends React.Component<DispatchProps> {
  constructor(props: DispatchProps) {
    super(props)
  }

  render() {
    return this.props.children
  }

  componentDidMount() {
    this.startMediaListeners()

    this.checkSmallBreakPoint()
    this.checkMediumBreakPoint()
    this.checkLargeBreakPoint()
  }

  componentWillUnmount() {
    this.destroyMediaListeners()
  }

  private destroyMediaListeners() {
    smallListener.removeListener(this.checkSmallBreakPoint)
    mediumListener.removeListener(this.checkMediumBreakPoint)
    largeListener.removeListener(this.checkLargeBreakPoint)
  }

  private startMediaListeners() {
    smallListener.addListener(this.checkSmallBreakPoint)
    mediumListener.addListener(this.checkMediumBreakPoint)
    largeListener.addListener(this.checkLargeBreakPoint)
  }

  private checkSmallBreakPoint = () => {
    this.props.setSmallBreakPoint(smallListener.matches)
  }

  private checkMediumBreakPoint = () => {
    this.props.setMediumBreakPoint(mediumListener.matches)
  }

  private checkLargeBreakPoint = () => {
    this.props.setLargeBreakPoint(largeListener.matches)
  }
}

const connected = connect<null, DispatchProps>(null, mapDispatchToProps)(MatchMedia)

export {connected as MatchMedia}

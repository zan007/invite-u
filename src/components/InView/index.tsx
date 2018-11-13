import * as React from "react"
import scrollMonitor, {IWatcher} from "scrollmonitor"
import * as classnames from "classnames"

const WATCHER_OFFSET = {top: 0, bottom: -100}

interface IProps {
  anchor?: string
  whenFullyVisible?: boolean
  callback?: () => void
}
interface IState {
  inView: boolean
}

class InView extends React.PureComponent<IProps, IState> {
  private ref: HTMLDivElement
  private watcher: IWatcher

  constructor(props: IProps) {
    super(props)

    this.state = {inView: false}
  }

  componentDidMount() {
    this.watcher = scrollMonitor.create(this.ref, WATCHER_OFFSET)
    this.watcher.stateChange(this.toggleInViewClass)
    this.toggleInViewClass()
  }

  componentWillUnmount() {
    this.watcher.destroy()
  }

  render() {
    const classList = classnames({
      "in-view": this.state.inView,
    })

    return (
      <div className={classList} ref={this.setRef}>{this.props.children}</div>
    )
  }

  private setRef = (el: HTMLDivElement) => {
    this.ref = el
  }

  private toggleInViewClass = () => {
    const watcherValue = this.props.whenFullyVisible ? this.watcher.isFullyInViewport : this.watcher.isInViewport

    this.setState({inView: watcherValue})
    if (this.props.callback && watcherValue) {
      this.props.callback()
    }
/*
    if (this.props.anchor) {
      console.log(window.location, this.props.anchor)
      window.location.hash = this.props.anchor
    }*/
  }
}

export {InView}

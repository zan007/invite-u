import * as React from "react"
import {connect} from "react-redux"
import {setPages} from "redux/globals/actions"
import {getPages} from "dao/pages"
import {SpinnerWrapper} from "components/Spinner"
import {MatchMedia} from "components/MatchMedia"

const mapDispatchToProps = {setPages}
type DispatchProps = typeof mapDispatchToProps

interface IState {
  loaded: boolean
}

class AppLoaderContainer extends React.Component<DispatchProps, IState> {
  constructor(props: DispatchProps) {
    super(props)

    void this.fetchData()
    this.state = {loaded: false}
  }

  render() {
    const {loaded} = this.state

    if (loaded) {
      return (
        <MatchMedia>
          {this.props.children}
        </MatchMedia>
      )
    }

    return <SpinnerWrapper />
  }

  private async fetchData() {
    return Promise.all([
      getPages().then(this.props.setPages),
    ]).then(this.activate)
  }

  private activate = () => {
    this.setState({loaded: true})
  }
}

const connected = connect<null, DispatchProps, null>(null, mapDispatchToProps)(AppLoaderContainer)

export {connected as AppLoaderContainer}

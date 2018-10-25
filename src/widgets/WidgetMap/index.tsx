import * as React from "react"
import {Entry} from "contentful"
import {IMarker} from "../../models/marker"
import {GoogleMaps} from "../../components/GoogleMaps"

interface IProps {
  markers: Array<Entry<IMarker>>
}

interface IState {}

class WidgetMap extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    const {markers} = this.props

    return (
      <GoogleMaps
        markers={markers}
      />
    )
  }
}

export default WidgetMap


import * as React from "react"
import {Row, Col} from "components/grid"
import {IMarker} from "../../models/marker"
import {Icon} from "../../components/Icon"
import "./WidteSeeAtMap.scss"
import {IStoreState} from "../../redux/model"
import {connect} from "react-redux"
import {IMapState} from "../../redux/map/model"
import {setCurrentMarker} from "redux/map/actions"
import {Entry} from "contentful"

interface IProps {
  name: string,
  title: string,
  marker: Entry<IMarker>
}
interface IState {}

const mapStateToProps = (state: IStoreState): IMapState => {
  const {currentMarker} = state.map

  return {currentMarker}
}
const mapDispatchToProps = {setCurrentMarker}

type DispatchProps = typeof mapDispatchToProps
type Props = IProps & IMapState & DispatchProps

class WidgetSeeAtMap extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    const {title, marker} = this.props

    return (
      <div className={"widget-see-at-map"}>
        <Row hAlign={"center"} vAlign={"middle"} >
          <Col small={12}>
            <a className={"map-link"} onClick={this.seeAtMap} role={"link"}>
              {title}
              <Icon name={"map-location"}/>
            </a>
          </Col>
        </Row>
      </div>
    )
  }

  private seeAtMap = () => {
    return this.props.setCurrentMarker(this.props.marker)
  }
}

const connected = connect<IMapState, DispatchProps>(mapStateToProps, mapDispatchToProps)(WidgetSeeAtMap)

export {connected as WidgetSeeAtMap}

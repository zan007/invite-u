import React from "react"
import {} from "googlemaps"
import {IMarker} from "../../models/marker"
import {Entry} from "contentful"
import GoogleMapsApiLoader from "google-maps-api-loader"
import {Col, Row} from "../grid"
import {IMapState} from "redux/map/model"
import {connect} from "react-redux"
import {setCurrentMarker} from "redux/map/actions"
import {IStoreState} from "redux/model"

import "./GoogleMaps.scss"
import "snazzy-info-window/dist/snazzy-info-window.scss"

interface IProps {
  children?: any,
  markers: Array<Entry<IMarker>>
}

interface IState {}

const mapStateToProps = (state: IStoreState): IMapState => {
  const {currentMarker} = state.map

  return {currentMarker}
}
const mapDispatchToProps = {setCurrentMarker}

type DispatchProps = typeof mapDispatchToProps
type Props = IProps & IMapState & DispatchProps

class GoogleMaps extends React.PureComponent<Props, IState> {

  mapContainer: HTMLDivElement
  map: google.maps.Map

  constructor(props: Props) {
    super(props)
  }

  render() {
    this.focusOnCurrentMarker()

    return (
      <Row>
        <Col small={12}>
          <div className={"map-container"} ref={this.setMapContainer}>
            {this.props.children}
          </div>
        </Col>
      </Row>
    )
  }

  componentDidMount() {
    GoogleMapsApiLoader({
      libraries: ["places"],
      apiKey: __GOOGLE_MAPS_API_KEY__,
    }).then((googleApi) => {
      this.initMap()
    })

  }

  focusOnCurrentMarker() {
    if (this.map && this.props.currentMarker) {
      this.map.panTo(this.getPositionFields(this.props.currentMarker))
    }
  }

  initMap() {
    this.map = new google.maps.Map(this.mapContainer, {
      center: this.getPositionFields(this.props.markers[0]),
      zoom: 16,
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
      },
    })

    this.setMapStyles()
    this.setMapMarkers()
  }

  private setMapStyles = () => {
    this.map.mapTypes.set("styled_map", this.getMapStyles())
    this.map.setMapTypeId("styled_map")
  }

  private setMapContainer = (mapContainer: HTMLDivElement) => {
    this.mapContainer = mapContainer
  }

  private setMapMarkers = () => {
    const snazzyInfoWindow = require("snazzy-info-window")
    const bounds = new google.maps.LatLngBounds()

    this.props.markers.map((marker) => {
      const markerPosition = this.getPositionFields(marker)
      const newMarker = new google.maps.Marker({
        position:  markerPosition,
        map: this.map,
        icon: this.createPinSymbol("#dd9142"),
        title: marker.fields.name,
      })

      newMarker.setAnimation(google.maps.Animation.BOUNCE)

      const infoWindow = new snazzyInfoWindow({
        content: this.createMarkerDescription(marker.fields),
        marker: newMarker,
      })

      google.maps.event.addListener(newMarker, "mouseout", () => {
        if (!infoWindow.isOpen()) {
          newMarker.setAnimation(google.maps.Animation.BOUNCE)
        }
      })

      google.maps.event.addListener(newMarker, "mouseover", () => {
        if (!infoWindow.isOpen()) {
          newMarker.setAnimation(null)
        }
      })

      google.maps.event.addListener(newMarker, "click", () => {
        infoWindow.open()
      })

      infoWindow.onRemove(() => {
        newMarker.setAnimation(google.maps.Animation.BOUNCE)
      })

      bounds.extend(markerPosition)

      return newMarker
    })

    this.map.fitBounds(bounds)
  }

  private createMarkerDescription = (marker: IMarker) => {
    const {description, details} = marker
    const {date, time, title} = details.fields

    let descriptionContent = description

    descriptionContent += `<br>${title}<br>${date}<br>${time}`

    return descriptionContent
  }

  private createPinSymbol(color: string) {
    return {
      path: "M8 2.1c1.1 0 2.2 0.5 3 1.3 0.8 0.9 1.3 1.9 1.3 3.1s-0.5 2.5-1.3 3.3l-3 3.1-3-3.1c-0.8-0.8-1.3-2-1.3-3.3 " +
      "0-1.2 0.4-2.2 1.3-3.1 0.8-0.8 1.9-1.3 3-1.3z",
      fillColor: color,
      fillOpacity: 1,
      anchor: new google.maps.Point(8, 14),
      strokeColor: color,
      strokeWeight: 0,
      scale: 4,
    }
  }

  private getPositionFields(marker: Entry<IMarker>) {
    const {lat, lng} = marker.fields

    return {
      lat,
      lng,
    }
  }

  private getMapStyles() {
    return new google.maps.StyledMapType([
        {elementType: "geometry", stylers: [{color: "#ebe3cd"}]},
        {elementType: "labels.text.fill", stylers: [{color: "#523735"}]},
        {elementType: "labels.text.stroke", stylers: [{color: "#f5f1e6"}]},
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{color: "#c9b2a6"}],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [{color: "#dcd2be"}],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{color: "#ae9e90"}],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{color: "#dfd2ae"}],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{color: "#dfd2ae"}],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{color: "#93817c"}],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{color: "#a5b076"}],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{color: "#447530"}],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{color: "#f5f1e6"}],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{color: "#fdfcf8"}],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{color: "#f8c967"}],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{color: "#e9bc62"}],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [{color: "#e98d58"}],
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry.stroke",
          stylers: [{color: "#db8555"}],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [{color: "#806b63"}],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{color: "#dfd2ae"}],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.fill",
          stylers: [{color: "#8f7d77"}],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text.stroke",
          stylers: [{color: "#ebe3cd"}],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [{color: "#dfd2ae"}],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{color: "#b9d3c2"}],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{color: "#92998d"}],
        },
      ],
      {name: "Styled Map"})
  }
}

const connected = connect<IMapState, DispatchProps>(mapStateToProps, mapDispatchToProps)(GoogleMaps)
export {connected as GoogleMaps}

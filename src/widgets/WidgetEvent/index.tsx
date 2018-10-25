
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetEvent.scss"
import {Icon, IconName} from "components/Icon"
import {Entry} from "contentful"
import {WidgetsList} from "../../components/WidgetsList"

interface IEventDetails {
  name: string
  icon: IconName
  title: string
  date: string
  time: string
  place: string
  link: string
  additionalDetails: Array<Entry<any>>
}

interface IProps {
  name: string
  title?: string
  subtitle?: string
  eventDetails: Array<Entry<IEventDetails>>
}

interface IState {}

class WidgetEvent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    const {title, subtitle, eventDetails} = this.props

    return (
      <div className={"widget-event"}>
        <div className={"text-center"}>
          <h1 className={"title"}>
            <span className={"animation fade-in delay-1"}>
              {title}
              </span>
          </h1>
          <h5 className={"subtitle"}>
              <span className={"animation fade-in delay-2"}>
                {subtitle}
              </span>
          </h5>
        </div>
        <Row>
          <Col small={12}>
            <div className={"event-details"}>
              {eventDetails && eventDetails.map((detail, index) => {
                const detailFields = detail.fields

                return (
                  <div className={"detail animation fade-in delay-2"} key={index}>
                    <a href={detailFields.link} role={"button"} className={"main-icon"}>
                      <Icon name={detailFields.icon}/>
                    </a>
                    <div className={"detail-title"}>{detailFields.title}</div>
                    <div className={"date"}>{detailFields.date}</div>
                    <div className={"time"}>{detailFields.time}</div>
                    <div className={"place"}>{detailFields.place}</div>
                    <div className={"additional-details"}>
                      {detailFields.additionalDetails && <WidgetsList items={detailFields.additionalDetails} />}
                    </div>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default WidgetEvent

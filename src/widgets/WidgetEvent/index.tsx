
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetEvent.scss"
import {Icon, IconName} from "components/Icon"
import {Entry} from "contentful"

interface IEventDetails {
  name: string
  icon: IconName
  title: string
  date: string
  time: string
  place: string
  link: string
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
    const {title, subtitle, eventDetails} = this.props;

    return (
      <div className={"widget-event"}>
        <div className={"text-center"}>
          <h1 className={"title"}>{title}</h1>
          <h5 className={"subtitle"}>{subtitle}</h5>
        </div>
        <Row>
          <Col small={12}>
            <div className={"event-details"}>
              {eventDetails && eventDetails.map((detail, index) => {
                const detailFields = detail.fields

                return (
                  <div className={"detail"} key={index}>
                    <a href={detailFields.link} role={"button"}>
                      <Icon name={detailFields.icon}/>
                    </a>
                    <div className={"detail-title"}>{detailFields.title}</div>
                    <div className={"date"}>{detailFields.date}</div>
                    <div className={"time"}>{detailFields.time}</div>
                    <div className={"place"}>{detailFields.place}</div>
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

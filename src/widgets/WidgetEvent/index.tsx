
import * as React from "react"
import {Row, Col} from "components/grid"
import "./WidgetEvent.scss"
import {Icon, IconName} from "components/Icon"
import {Entry} from "contentful"
import {WidgetsList} from "../../components/WidgetsList"
import {AnimateOnScroll} from "components/AnimateOnScroll"
import {IEventDetails} from "../../models/eventDetails"

interface IProps {
  name: string
  title?: string
  subtitle?: string
  eventDetails: Array<Entry<IEventDetails>>
}

interface IState {
  mounted: boolean,
}

class WidgetEvent extends React.Component<IProps, IState> {
  test: boolean

  constructor(props: IProps) {
    super(props)

    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    const {title, subtitle, eventDetails} = this.props

    const linkStyle = {
      transition: "opacity .5s linear",
    }

    const linkTransitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 1 },
      exited: { opacity: 0 },
    } as any

    return (
      <div className={"widget-event"}>
        <AnimateOnScroll visible={true} duration={500}>
          <div className={"text-center"}>
            <h1 className={"title"}>
              {title}
            </h1>
            <h5 className={"subtitle"}>
              {subtitle}
            </h5>
          </div>
        </AnimateOnScroll>
        <Row>
          <Col small={12}>
            <div className={"event-details"}>
              {eventDetails && eventDetails.map((detail, index) => {
                const detailFields = detail.fields

                return (
                  <div className={"detail"} key={index}>
                    <AnimateOnScroll visible={this.state.mounted} duration={(index + 1) * 400}>
                      <div>
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
                    </AnimateOnScroll>
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

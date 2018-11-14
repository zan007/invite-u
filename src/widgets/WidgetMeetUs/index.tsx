
import * as React from "react"
import {Asset, Entry} from "contentful"
import {ISocialLink} from "models/socialLink"
import {PersonDetails} from "components/PersonDetails"

interface INewlyweds {
  avatar: Asset
  name: string,
  description: string
  descriptionAuthor: string
  socialProfiles: Array<Entry<ISocialLink>>
}

interface IProps {
  name: string
  groom: Entry<INewlyweds>
  bride: Entry<INewlyweds>
}

interface IState {}

class MeetUs extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={"meet-us"}>
        <PersonDetails
          name={this.props.bride.fields.name}
          avatar={this.props.bride.fields.avatar}
          float={"left"}
          description={this.props.bride.fields.description}
          descriptionAuthor={this.props.bride.fields.descriptionAuthor}
          socialProfiles={this.props.bride.fields.socialProfiles}
        />
        <PersonDetails
          name={this.props.groom.fields.name}
          avatar={this.props.groom.fields.avatar}
          float={"right"}
          description={this.props.groom.fields.description}
          descriptionAuthor={this.props.groom.fields.descriptionAuthor}
          socialProfiles={this.props.groom.fields.socialProfiles}
        />
      </div>
    )
  }
}

export default MeetUs

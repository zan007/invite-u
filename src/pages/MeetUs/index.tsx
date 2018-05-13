
import * as React from "react"
import {EntryCollection} from "contentful"
import {Link} from "react-router-dom"

interface IProps {
  title: string,
  subtitle: string,
  description: string,
}

interface IState {}

class MeetUs extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        meet us
        <div>
          <Link to="/">
            home
          </Link>
        </div>
        <div>
          <Link to="/meet-us">
            meet us
          </Link>
        </div>
      </div>
    )
  }
}

export default MeetUs

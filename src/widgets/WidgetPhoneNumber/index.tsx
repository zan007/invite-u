import * as React from "react"

interface IProps {
  phoneOwner: string,
  phoneNumber: string
}

interface IState {}

class WidgetPhoneNumber extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    const {phoneOwner, phoneNumber} = this.props

    return (
      <div className="phone-number">
        <span className={"owner"}>{phoneOwner}</span>
        &nbsp;-&nbsp;
        <a className={"number"} href={`tel:+48 ${phoneNumber}`}>{phoneNumber}</a>
      </div>
    )
  }
}

export default WidgetPhoneNumber

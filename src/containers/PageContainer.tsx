import * as React from "react"
import {EntryCollection} from "contentful"
import {IPageDto} from "dto/pages"
import {getEntries} from "dao/entries"
import {Spinner} from "components/Spinner"
import {WidgetsList} from "components/WidgetsList"

interface IProps {
  data: IPageDto
}

interface IState {
  children: EntryCollection<any> | null
}

class PageContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {children: null}
    void this.getChildren()
  }

  render() {
    const {children} = this.state

    if (children) {
      return (<WidgetsList items={children.items} />)
    }

    return <Spinner />
  }

  private async getChildren() {
    const ids = this.props.data.sections.map((section) => section.sys.id)

    return getEntries(ids).then((children) => {
      this.setState({children})
    })
  }
}

export {PageContainer}

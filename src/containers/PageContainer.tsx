import * as React from "react"
import {IPageDto} from "dto/pages"
import {getEntries} from "dao/entries"
import {Spinner} from "components/Spinner"

interface IProps {
  data: IPageDto
}

interface IState {
  pageComponent: string | null
}

interface IPagesMap {
  [key: string]: any
}

const pagesMap: IPagesMap = {
  meetUs: require("./../pages/MeetUs").default
}


class PageContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {pageComponent: null}

    void this.getPageComponent()
  }

  render() {
    const {pageComponent} = this.state

    if (pageComponent) {
      return this.renderPageComponent()
    }

    return <Spinner />
  }

  private async getPageComponent() {
    const {data} = this.props
    const ids = [data.pageComponent.sys.id]

    return getEntries(ids).then((entries) => {
      if (entries.items.length) {
        const pageComponent = entries.items[0].fields.name

        this.setState({pageComponent})
      }
    })
  }

  private renderPageComponent = () => {
    const {pageComponent} = this.state

    if (pageComponent) {
      const Component = pagesMap[pageComponent]

      if (Component) {
        return <Component/>
      }
    }

    return null
  }
}

export {PageContainer}

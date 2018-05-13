import * as React from "react"
import {connect} from "react-redux"
import {Route, RouteComponentProps, withRouter} from "react-router-dom"
import {Switch} from "react-router"
import {EntryCollection} from "contentful"
import {IStoreState} from "redux/model"
import {IPageDto} from "dto/pages"
import {PageContainer} from "./PageContainer"

interface IStateProps {
  pages: EntryCollection<IPageDto> | null
}

const mapStateToProps = (state: IStoreState): IStateProps => {
  const {pages} = state.globals

  return {pages}
}
const renderPage = (page: IPageDto) => (props: RouteComponentProps<any>) => (<PageContainer {...props} data={page} />)

type Props = RouteComponentProps<any> & IStateProps

class PagesContainer extends React.Component<Props> {
  render() {
    const {pages} = this.props

    if (pages) {
      return (
        <Switch>
          {pages.items.map(({fields}, idx) => (
            <Route key={idx} exact={fields.slug === "/"} path={fields.slug} render={renderPage(fields)} />
          ))}
        </Switch>
      )
    }

    // FIXME: create 404 page
    return <div>404</div>
  }
}

const connectedToStore = connect<IStateProps>(mapStateToProps, {})(PagesContainer)
const withRouterProps = withRouter<any>(connectedToStore)

export {withRouterProps as PagesContainer}

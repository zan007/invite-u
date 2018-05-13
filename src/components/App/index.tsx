import * as React from "react"
import {Provider} from "react-redux"
import {HashRouter as Router} from "react-router-dom"
import {store} from "redux/store"
import * as smoothscroll from "smoothscroll-polyfill"
import "scss/main.scss"

import {AppLoaderContainer} from "containers/AppLoaderContainer"
import {PagesContainer} from "containers/PagesContainer"

class AppComponent extends React.Component {
  constructor(props: {}) {
    super(props)
    smoothscroll.polyfill()
  }

  render() {
    return (
      <Provider store={store}>
        <AppLoaderContainer>
          <Router>
            <PagesContainer />
          </Router>
        </AppLoaderContainer>
      </Provider>
    )
  }
}

let App: React.ComponentClass

if (process.env.NODE_ENV === "production") {
  App = AppComponent
} else {
  const {hot} = require("react-hot-loader")
  App = hot(module)(AppComponent)
}

export {App}

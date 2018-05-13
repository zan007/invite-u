
import {applyMiddleware, createStore, Middleware, Store, StoreEnhancer} from "redux"
import {rootReducer} from "./reducers"
import {IStoreState} from "./model"

const middleware: Middleware[] = []

let storeEnhacer: StoreEnhancer<any>

if (process.env.NODE_ENV === "production") {
  storeEnhacer = applyMiddleware(...middleware)
} else {
  const {composeWithDevTools} = require("redux-devtools-extension")

  storeEnhacer = composeWithDevTools(applyMiddleware(...middleware))
}

export const store: Store<IStoreState> = createStore(
  rootReducer,
  storeEnhacer,
)

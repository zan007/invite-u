import {combineReducers, Reducer} from "redux"
import {IStoreState} from "./model"

import {globalsReducers as globals} from "./globals/reducers"
import {mediaReducers as media} from "./media/reducers"

const reducers = {
  globals,
  media,
}

export const rootReducer: Reducer<IStoreState> = combineReducers<IStoreState>(reducers)

import {combineReducers, Reducer} from "redux"
import {IStoreState} from "./model"

import {globalsReducers as globals} from "./globals/reducers"
import {mediaReducers as media} from "./media/reducers"
import {modalsReducers as modals} from "./modals/reducers"
import {mapReducers as map} from "./map/reducers"

const reducers = {
  globals,
  media,
  modals,
  map,
}

export const rootReducer: Reducer<IStoreState> = combineReducers<IStoreState>(reducers)

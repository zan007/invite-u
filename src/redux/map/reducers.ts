import {IAction, reducerCreator} from "services/redux"
import {MapState} from "./model"
import * as actions from "./actions"
import {IMarker} from "../../models/marker"
import {Entry} from "contentful"

const initialState = new MapState()

const setCurrentMarker = (state: MapState, action: IAction<Entry<IMarker>>) => {
  return state.set("currentMarker", action.payload)
}

export const mapReducers = reducerCreator(initialState)
  .case(actions.setCurrentMarker, setCurrentMarker)
  .build()

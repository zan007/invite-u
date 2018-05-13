import {IAction, reducerCreator} from "services/redux"
import {GlobalsState} from "./model"
import {EntryCollection} from "contentful"
import {IPageDto} from "dto/pages"
import * as actions from "./actions"

const initialState = new GlobalsState()

const setPages = (state: GlobalsState, action: IAction<EntryCollection<IPageDto>>) => {
  return state.set("pages", action.payload)
}

export const globalsReducers = reducerCreator(initialState)
  .case(actions.setPages, setPages)
  .build()

import {IAction, reducerCreator} from "services/redux"
import {MediaState} from "./model"
import * as actions from "./actions"

const initialState = new MediaState()

const setSmallBreakPoint = (state: MediaState, action: IAction<boolean>) => {
  return state.update("breakpoints", (breakpoints) => {
    return breakpoints.set("small", action.payload)
  })
}

const setMediumBreakPoint = (state: MediaState, action: IAction<boolean>) => {
  return state.update("breakpoints", (breakpoints) => {
    return breakpoints.set("medium", action.payload)
  })
}

const setLargeBreakPoint = (state: MediaState, action: IAction<boolean>) => {
  return state.update("breakpoints", (breakpoints) => {
    return breakpoints.set("large", action.payload)
  })
}

export const mediaReducers = reducerCreator(initialState)
  .case(actions.setSmallBreakPoint, setSmallBreakPoint)
  .case(actions.setMediumBreakPoint, setMediumBreakPoint)
  .case(actions.setLargeBreakPoint, setLargeBreakPoint)
  .build()

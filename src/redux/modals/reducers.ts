import {IAction, reducerCreator} from "services/redux"
import {ModalsState, IModals} from "./model"
import * as actions from "./actions"

const initialState = new ModalsState()

const openModal = (state: ModalsState, action: IAction<IModals>) => {
  return state.update("activeModals", (activeModals) => {
    return activeModals.concat(action.payload)
  })
}

const closeModal = (state: ModalsState, action: IAction<IModals>) => {
  return state.update("activeModals", (activeModals) => {
    return activeModals.filter((modal) => {
      return modal.id !== action.payload.id
    })
  })
}

export const modalsReducers = reducerCreator(initialState)
  .case(actions.openModal, openModal)
  .case(actions.closeModal, closeModal)
  .build()

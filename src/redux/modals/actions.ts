import {actionCreator} from "services/redux"
import {IModals} from "./model"

export const openModal = actionCreator<IModals>("OPEN_MODAL")
export const closeModal = actionCreator<IModals>("CLOSE_MODAL")

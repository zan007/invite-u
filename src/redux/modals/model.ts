import {Record} from "immutable"

export interface IModals {
  id: string,
  content: any
}

export interface IModalsState {
  activeModals: IModals[]
}

export class ModalsState extends Record<IModalsState>({
  activeModals: new Array(),
}) {}

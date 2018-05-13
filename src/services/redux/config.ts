import {Action} from "redux"

export interface IPureAction extends Action {
  type: string
}

export interface IAction<P> extends IPureAction {
  payload: P
}

export interface IActionCreator<P> {
  type: string
  (payload: P): IAction<P>
}

export interface IPureActionCreator extends IActionCreator<null> {
  (): IAction<null>
}

export type IHandler<S, P> = (state: S, action: IAction<P>) => S

export interface IKeyedPayload<K, P> {
  key: K
  data: P
}

export function keyedPayload<K, P>(key: K, data: P): IKeyedPayload<K, P> {
  return {key, data}
}

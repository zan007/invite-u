import {IAction, IActionCreator, IPureActionCreator} from "./config"
/* tslint:disable:prefer-object-spread */
export const actionCreator = <P>(type: string): IActionCreator<P> => {
  return Object.assign(
    (payload: P): IAction<P> => ({type, payload}),
    {type},
  )
}

export const pureActionCreator = (type: string): IPureActionCreator => {
  return Object.assign(
    (): IAction<null> => ({type, payload: null}),
    {type},
  )
}
/* tslint:enable:prefer-object-spread */

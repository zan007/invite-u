import {IAction, IActionCreator, IHandler} from "./config"

interface ICase<S, P> {
  actionCreator: IActionCreator<P>
  handler: IHandler<S, P>
}

interface IReducerCreator<S> {
  case<P>(actionCreator: IActionCreator<P>, handler: IHandler<S, P>): IReducerCreator<S>
  build(): (state: S, action: IAction<any>) => S
}

export const reducerCreator = <S>(initialState: S): IReducerCreator<S> => {
  const cases: Array<ICase<S, any>> = []
  const creator = {} as IReducerCreator<S>

  creator.case = <P>(actionCreator: IActionCreator<P>, handler: IHandler<S, P>) => {
    cases.push({actionCreator, handler})

    return creator
  }

  creator.build = () => {
    return (state: S = initialState, action: IAction<any>) => {
      const searchedCase = cases.find((item) => {
        return item.actionCreator.type === action.type
      })

      if (searchedCase !== undefined) {
        return searchedCase.handler(state, action)
      }

      return state
    }
  }

  return creator
}

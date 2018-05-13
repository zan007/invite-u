import {GlobalsState} from "./globals/model"
import {MediaState} from "./media/model"

export interface IStoreState {
  globals: GlobalsState,
  media: MediaState,
}

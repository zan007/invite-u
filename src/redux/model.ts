import {GlobalsState} from "./globals/model"
import {MediaState} from "./media/model"
import {ModalsState} from "./modals/model"

export interface IStoreState {
  globals: GlobalsState,
  media: MediaState,
  modals: ModalsState,
}

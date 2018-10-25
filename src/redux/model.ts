import {GlobalsState} from "./globals/model"
import {MediaState} from "./media/model"
import {ModalsState} from "./modals/model"
import {MapState} from "./map/model"

export interface IStoreState {
  globals: GlobalsState,
  media: MediaState,
  modals: ModalsState,
  map: MapState,
}

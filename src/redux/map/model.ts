import {Record} from "immutable"
import {IMarker} from "../../models/marker"
import {Entry} from "contentful"

export interface IMapState {
  currentMarker: Entry<IMarker> | null
}

export class MapState extends Record<IMapState>({
  currentMarker: null,
}) {}

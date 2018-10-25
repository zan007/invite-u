import {actionCreator} from "services/redux"
import {IMarker} from "../../models/marker"
import {Entry} from "contentful"

export const setCurrentMarker = actionCreator<Entry<IMarker>>("SET_CURRENT_MARKER")

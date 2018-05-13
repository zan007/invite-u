import {actionCreator} from "services/redux"

export const setSmallBreakPoint = actionCreator<boolean>("MEDIA_SET_SMALL_BREAKPOINT")
export const setMediumBreakPoint = actionCreator<boolean>("MEDIA_SET_MEDIUM_BREAKPOINT")
export const setLargeBreakPoint = actionCreator<boolean>("MEDIA_SET_LARGE_BREAKPOINT")

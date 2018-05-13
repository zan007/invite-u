import {actionCreator} from "services/redux"
import {EntryCollection} from "contentful"
import {IPageDto} from "dto/pages"

export const setPages = actionCreator<EntryCollection<IPageDto>>("GLOBALS_SET_PAGES")

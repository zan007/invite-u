import {Record} from "immutable"
import {EntryCollection} from "contentful"
import {IPageDto} from "dto/pages"

export interface IGlobalsState {
  pages: EntryCollection<IPageDto> | null
}

export class GlobalsState extends Record<IGlobalsState>({
  pages: null,
}) {}

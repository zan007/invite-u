import {Record} from "immutable"
import {Breakpoints} from "./breakpoints"

export interface IMediaState {
  breakpoints: Breakpoints
}

export class MediaState extends Record<IMediaState>({
  breakpoints: new Breakpoints(),
}) {}

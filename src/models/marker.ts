import {IEventDetails} from "./eventDetails"
import {Entry} from "contentful"

export interface IMarker {
  name: string
  description: string
  lat: number
  lng: number
  details: Entry<IEventDetails>
}

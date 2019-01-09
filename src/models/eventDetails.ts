import {IconName} from "../components/Icon"
import {Entry} from "contentful"

export interface IEventDetails {
  name: string
  icon: IconName
  title: string
  date: string
  time: string
  place: string
  link: string
  additionalDetails: Array<Entry<any>>
}

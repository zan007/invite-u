import {Entry} from "contentful"
import {IPageDto} from "dto/pages"

export interface IHeaderDto {
  title: string
  mainLinks: Array<Entry<IPageDto>>
}

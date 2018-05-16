import {ContentTypeLink} from "contentful"

interface ILink {
  sys: ContentTypeLink
}

export interface IPageDto {
  slug: string
  title: string
  sections: ILink[]
}

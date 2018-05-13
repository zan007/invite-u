import * as React from "react"
import * as classnames from "classnames"
import {Asset} from "contentful"

import "./BackgroundImage.scss"

interface IBackgroundImageProps {
  position: "left" | "right"
  image: Asset
}

const BackgroundImage: React.SFC<IBackgroundImageProps> = ({position, image}) => {
  const classList = classnames(
    "bg",
    position,
  )

  const style = {
    backgroundImage: `url('${image.fields.file.url}')`,
  }

  return (
    <span
      className={classList}
      style={style}
    />
  )
}

export {BackgroundImage}

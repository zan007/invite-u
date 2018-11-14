import * as React from "react"
import "./Avatar.scss"

interface IAvatarProps {
  image?: string
  title: string
}

const Avatar: React.SFC<IAvatarProps> = ({image, title}) => {

  return (
    <div className={"avatar"}>
      {image && <img src={image} alt={title} />}
    </div>
  )
}

export {Avatar}

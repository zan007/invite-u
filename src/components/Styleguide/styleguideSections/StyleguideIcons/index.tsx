import * as React from "react"

import {Icon} from "components/Icon"
import "./StyleguideIcons.scss"

interface IProps {
}

const StyleguideIcons: React.SFC<IProps> = () => {
  return (
    <div className={"styleguide-icons-wrapper"}>
      <p>Independent icon element</p>

      <Icon name={"arrow-down"}/>

      <p>Icon element as wrapper</p>

      <Icon name={"arrow-down"}>test</Icon>
    </div>
  )
}

export {StyleguideIcons}

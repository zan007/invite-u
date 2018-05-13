import * as React from "react"
import * as classnames from "classnames"
import {Asset} from "contentful"

import "./Section.scss"
import {ColorNames} from "models/colorNames"
import {BackgroundImage} from "components/BackgroundImage"
import {InView} from "components/InView"
import {Scroll} from "components/Scroll"

interface IProps {
  children?: any
  color?: ColorNames
  image?: Asset
  position?: "left" | "right"
  fullHeight?: boolean
  scroll?: "down" | "up"
}

const Section: React.SFC<IProps> = ({
  children,
  color,
  image,
  position = "left",
  fullHeight = false,
  scroll,
}) => {
  const classList = classnames({
    [`bg-${color}`]: Boolean(color),
    "full-height": fullHeight,
  })

  return (
    <InView>
      <section className={classList}>
        {(image && position) &&
          <BackgroundImage
            position={position}
            image={image}
          />
        }
        {children}
        {scroll &&
          <Scroll direction={scroll} />
        }
      </section>
    </InView>
  )
}

export {Section}

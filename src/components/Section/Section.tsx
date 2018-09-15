import * as React from "react"
import * as classnames from "classnames"
import {Asset} from "contentful"

import "./Section.scss"
import {ColorNames} from "models/colorNames"
import {BackgroundImage} from "components/BackgroundImage"
import {InView} from "components/InView"
import {Scroll} from "components/Scroll"
import {IconName} from "components/Icon"
import {Divider} from "components/Divider"
import {SectionTitle} from "./SectionTitle"

interface IProps {
  children?: any
  color?: ColorNames
  title?: string
  icon?: IconName
  image?: Asset
  position?: "left" | "right"
  fullHeight?: boolean
  scroll?: "down" | "up"
  bottomDivider?: boolean
  topDivider?: boolean
  fancyTopDivider?: boolean
  fancyBottomDivider?: boolean
}

const Section: React.SFC<IProps> = ({
  children,
  color,
  title,
  icon,
  image,
  position = "left",
  fullHeight = false,
  topDivider = false,
  bottomDivider = false,
  fancyTopDivider = false,
  fancyBottomDivider = false,
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
        {topDivider &&
          <Divider top={true} fancy={fancyTopDivider}/>
        }
        <SectionTitle icon={icon} title={title}/>
        {children}
        {bottomDivider &&
          <Divider bottom={true} fancy={fancyBottomDivider}/>
        }
        {scroll &&
          <Scroll direction={scroll} />
        }
      </section>
    </InView>
  )
}

export {Section}

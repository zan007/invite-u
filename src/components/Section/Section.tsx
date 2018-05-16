import * as React from "react"
import * as classnames from "classnames"
import {Asset} from "contentful"

import "./Section.scss"
import {ColorNames} from "models/colorNames"
import {BackgroundImage} from "components/BackgroundImage"
import {InView} from "components/InView"
import {Scroll} from "components/Scroll"
import {Icon, IconName} from "components/Icon"
import {Row, Col} from "components/grid"
import {Divider} from "components/Divider"

interface IProps {
  children?: any
  color?: ColorNames
  title?: string
  icon?: IconName
  image?: Asset
  position?: "left" | "right"
  fullHeight?: boolean
  scroll?: "down" | "up",
  bottomDivider?: boolean,
  topDivider?: boolean
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
        <Row hAlign={"center"}>
          <Col small={12} className={"text-center"}>
            {icon &&
              <div className={"section-icon"}>
                <Icon name={icon}/>
              </div>
            }
          </Col>
          <Col small={12} className={"text-center"}>
            {title &&
              <h2 className={"section-title"}>{title}</h2>
            }
          </Col>
        </Row>
        {children}
        {bottomDivider &&
          <div className={"bottom-divider"}>
            <Divider/>
          </div>
        }
        {scroll &&
          <Scroll direction={scroll} />
        }
      </section>
    </InView>
  )
}

export {Section}

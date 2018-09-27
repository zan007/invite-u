import * as React from "react"
import {Asset, Entry} from "contentful"
import {Section} from "components/Section"
import {WidgetsList} from "components/WidgetsList"
import {ColorNames} from "models/colorNames"
import {IconName} from "../../components/Icon"

interface IProps {
  backgroundColor?: ColorNames
  fullHeight?: boolean
  widgets: Array<Entry<any>>
  imageBackground?: Asset
  backgroundPosition: "left" | "right" | "center"
  color?: ColorNames
  title?: string
  icon?: IconName
  bottomDivider?: boolean,
  topDivider?: boolean
  fancyBottomDivider?: boolean
  fancyTopDivider?: boolean
}

class WidgetSection extends React.Component<IProps> {
  render() {
    const {
      backgroundColor,
      fullHeight,
      widgets,
      imageBackground,
      backgroundPosition,
      title,
      icon,
      bottomDivider,
      topDivider,
      fancyBottomDivider,
      fancyTopDivider,
    } = this.props

    return (
      <Section
        color={backgroundColor}
        fullHeight={fullHeight}
        image={imageBackground}
        backgroundPosition={backgroundPosition}
        title={title}
        icon={icon}
        bottomDivider={bottomDivider}
        topDivider={topDivider}
        fancyBottomDivider={fancyBottomDivider}
        fancyTopDivider={fancyTopDivider}
      >
        <WidgetsList items={widgets} />
      </Section>
    )
  }
}

export default WidgetSection

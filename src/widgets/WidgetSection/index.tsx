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
  imagePosition: "left" | "right"
  color?: ColorNames
  title?: string
  icon?: IconName
  bottomDivider?: boolean,
  topDivider?: boolean
}

class WidgetSection extends React.Component<IProps> {
  render() {
    const {
      backgroundColor,
      fullHeight,
      widgets,
      imageBackground,
      imagePosition,
      title,
      icon,
      bottomDivider,
      topDivider,
    } = this.props

    return (
      <Section
        color={backgroundColor}
        fullHeight={fullHeight}
        image={imageBackground}
        position={imagePosition}
        title={title}
        icon={icon}
        bottomDivider={bottomDivider}
        topDivider={topDivider}
      >
        <WidgetsList items={widgets} />
      </Section>
    )
  }
}

export default WidgetSection

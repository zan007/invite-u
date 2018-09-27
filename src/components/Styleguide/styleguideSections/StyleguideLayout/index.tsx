import * as React from "react"
import {Asset} from "contentful"
import {Section} from "components/Section"

const image = {
  fields: {
    file: {
      url: "/assets/img/homepage-main-banner.jpg",
    },
  },
} as Asset

interface IProps {
}

const StyleguideLayout: React.SFC<IProps> = () => {
  return (
    <>
      <Section
        backgroundPosition={"right"}
        image={image}
        fullHeight={true}
        scroll="down"
      />
      <Section
        color="blue"
        fullHeight={true}
      />
      <Section
        color="salmon"
        fullHeight={true}
        scroll="down"
      />
      <Section
        color="yellow"
        fullHeight={true}
        scroll="up"
      />
    </>
  )
}

export {StyleguideLayout}

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
        name={"test1"}
        backgroundPosition={"right"}
        image={image}
        fullHeight={true}
        scroll="down"
      />
      <Section
        name={"test2"}
        color="blue"
        fullHeight={true}
      />
      <Section
        name={"test3"}
        color="salmon"
        fullHeight={true}
        scroll="down"
      />
      <Section
        name={"test4"}
        color="yellow"
        fullHeight={true}
        scroll="up"
      />
    </>
  )
}

export {StyleguideLayout}

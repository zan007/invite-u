declare module "react-id-swiper" {
  import * as React from "react"

  interface IOptsPagination {
    el: string
    type: "bullets" | "fraction" | "progressbar" | "custom"
    clickable: boolean
  }

  interface IOptsAutoplay {
    delay: number
  }

  interface IOptsNavigation {
    nextEl: string
    prevEl: string
  }

  interface IOptsCoverFlowEffect {
    rotate?: number,
    stretch?: number,
    depth?: number,
    modifier?: number,
    slideShadows?: boolean
  }

  interface IOptsCubeEffect {
    shadow?: boolean,
    slideShadows?: boolean,
    shadowOffset?: number,
    shadowScale?: number
  }

  interface ISwiperOpts {
    loop?: boolean
    observer?: boolean
    roundLengths?: boolean
    speed?: number
    effect?: "coverflow" | "cube" | "fade",
    coverflowEffect?: IOptsCoverFlowEffect,
    cubeEffect?: IOptsCubeEffect,
    autoplay?: IOptsAutoplay | boolean
    pagination?: IOptsPagination
    navigation?: IOptsNavigation
    centeredSlides?: boolean
    autoHeight?: boolean
    initialSlide?: number
    slidesPerView?: "auto" | number
    spaceBetween?: number
  }

  export {ISwiperOpts}

  export default class Swiper extends React.Component<ISwiperOpts, any> {}
}

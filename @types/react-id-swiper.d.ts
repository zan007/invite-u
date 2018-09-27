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
    slideChangeCallback?: (swiper: Swiper) => void,
    initCallback?: (swiper: Swiper) => void,
    effect?: "coverflow" | "cube" | "fade",
    coverflowEffect?: IOptsCoverFlowEffect,
    cubeEffect?: IOptsCubeEffect,
    autoplay?: IOptsAutoplay | boolean
    pagination?: IOptsPagination
    navigation?: IOptsNavigation
    preventClicks?: boolean
    slideToClickedSlide?: boolean
    centeredSlides?: boolean
    autoHeight?: boolean
    initialSlide?: number
    slidesPerView?: "auto" | number
    spaceBetween?: number
  }

  export {ISwiperOpts}

  export default class Swiper extends React.Component<ISwiperOpts, any> {
    on: (event: string, callback: () => void) => void
    realIndex: number
    updateSize: () => void
    updateSlides: () => void
    slideTo: (index: number, speed?: number) => void
  }
}

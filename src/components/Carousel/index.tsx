import * as React from "react"
import Swiper, {ISwiperOpts} from "react-id-swiper"
import * as classnames from "classnames"
import "./Carousel.scss"

interface IProps {
  opts?: ISwiperOpts
  className?: string
}

const Carousel: React.SFC<IProps> = ({opts, className, children}) => (
  <div className={classnames(className)}>
    <Swiper {...opts}>
      {React.Children.map(children, (child) => (
        <div className="swiper-slide">{child}</div>
      ))}
    </Swiper>
  </div>
)

export {Carousel}

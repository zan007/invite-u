import * as React from "react"
import Swiper, {ISwiperOpts} from "react-id-swiper"
import * as classnames from "classnames"
import "./Carousel.scss"

interface IProps {
  opts?: ISwiperOpts
  className?: string
}

class Carousel extends React.PureComponent<IProps> {
  private swiper: Swiper

  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {
    if (this.props.opts) {
      const {slideChangeCallback} = this.props.opts

      if (slideChangeCallback) {
        this.swiper.on("transitionEnd", () => {
          slideChangeCallback(this.swiper)
        })
      }
    }
  }

  render() {
    const {className, opts, children} = this.props

    return (
      <div className={classnames(className)}>
        <Swiper {...opts} ref={this.setRef}>
          {React.Children.map(children, (child) => (
            <div className="swiper-slide">{child}</div>
          ))}
        </Swiper>
      </div>
    )
  }

  private setRef = (node: any) => {
    if (node) {
      this.swiper = node.swiper

      if (this.props.opts && this.props.opts.initCallback) {
        this.props.opts.initCallback(this.swiper)
      }
    }
  }
}

export {Carousel}

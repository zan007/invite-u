import * as React from "react"
import "./Gallery.scss"
import {Asset} from "contentful"
import {Breakpoint} from "../Breakpoint"
import {Row, Col} from "../grid"
import {connect} from "react-redux"
import {Carousel} from "../Carousel"
import {openModal, closeModal} from "redux/modals/actions"
import uuid from "uuid"
import {FullscreenPreview} from "./FullscreenPreview"
import Swiper, {ISwiperOpts} from "react-id-swiper"

interface IGalleryProps {
  images: Asset[]
}

interface IGalleryState {
  currentImageIndex: number
}

const mapDispatchToProps = {openModal, closeModal}

type DispatchProps = typeof mapDispatchToProps
type Props = DispatchProps & IGalleryProps

class Gallery extends React.Component<Props, IGalleryState> {
  private swiper: Swiper

  constructor(props: Props) {
    super(props)

    this.state = {currentImageIndex: 0}
  }

  render() {
    return (
      <>
        <Breakpoint medium={true} large={true}>
          {this.renderDesktopCarousel()}
        </Breakpoint>
        <Breakpoint small={true}>
          {this.renderMobileCarousel()}
        </Breakpoint>
      </>
    )
  }

  private renderMobileCarousel = () => {
    const options = {...this.getCommonCarouselOptions(), ...this.getMobileCarouselOptions()}

    return (
      <Row vAlign={"middle"}>
        <Col small={12}>
          <div className={"gallery"}>
            <Carousel
              opts={options}
            >
              {this.props.images.map((image: Asset, index: number) => (
                <div key={index} className={"image"}>
                  <img
                    src={image.fields.file.url}
                    alt={image.fields.description}
                    onClick={this.openModal}
                  />
                  {image.fields.description ?
                    (<div className={"image-description"}>
                      {image.fields.description}
                    </div>) : ""}
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    )
  }

  private renderDesktopCarousel = () => {
    const options = {...this.getCommonCarouselOptions(), ...this.getDesktopCarouselOptions()}

    return (
      <div className={"gallery"}>
        <Carousel
          opts={options}
        >
          {this.props.images.map((image: Asset, index: number) => (
            <div key={index} className={"image"}>
              <img
                src={image.fields.file.url}
                alt={image.fields.description}
                onClick={this.openModal}
              />
              {image.fields.description ?
                (<div className={"image-description"}>
                  {image.fields.description}
                </div>) : ""}
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

  private openModal = () => {
    const images = [...this.props.images]

    const currentImageIndex = this.state.currentImageIndex

    return this.props.openModal({
      id: uuid.v4(),
      content: <FullscreenPreview images={images} currentImageIndex={currentImageIndex}/>,
    })
  }

  private changeImageHandler = (swiper: Swiper) => {
    this.setState({currentImageIndex: swiper.realIndex})
  }

  private getCommonCarouselOptions = (): ISwiperOpts => {
    return {
      observer: true,
      roundLengths: true,
      slideChangeCallback: this.changeImageHandler,
      speed: 700,
      loop: true,
      centeredSlides: true,
      preventClicks: false,
      slideToClickedSlide: true,
      spaceBetween: 40,
      autoHeight: true,
      autoplay: {
        delay: 60000,
      },
      /*pagination: {
        el: ".horizontal-pagination",
        type: "bullets",
        clickable: true,
      },*/
      renderPagination: () => {
        return ""
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  }

  private getDesktopCarouselOptions = (): ISwiperOpts => {
    return {
      slidesPerView: 3,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 500,
        modifier: 2,
      },
    }
  }

  private getMobileCarouselOptions = (): ISwiperOpts => {
    return {
      slidesPerView: "auto",
    }
  }
}

const connectedToStore =
  connect<{}, DispatchProps>(() => ({}), mapDispatchToProps)(Gallery)

export {connectedToStore as Gallery}

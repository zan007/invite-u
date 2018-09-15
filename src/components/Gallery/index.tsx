import * as React from "react"
import "./Gallery.scss"
import {Asset} from "contentful"
import {connect} from "react-redux"
import {Carousel} from "../Carousel"
import {openModal, closeModal} from "redux/modals/actions"
//import uuid from "uuid"
import {fullscreenPreview} from "./FullscreenPreview"

interface IGalleryProps {
  images: Asset[]
}

const mapDispatchToProps = {openModal, closeModal}
type DispatchProps = typeof mapDispatchToProps

type Props = DispatchProps & IGalleryProps

class Gallery extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className={"gallery"}>
        <Carousel
          opts={{
            observer: true,
            slidesPerView: 3,
            roundLengths: true,
            speed: 700,
            loop: true,
            centeredSlides: true,
            spaceBetween: 40,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 30,
              stretch: 0,
              depth: 500,
              modifier: 2,
            },
            autoHeight: true,
            autoplay: {
              delay: 60000,
            },
            pagination: {
              el: ".horizontal-pagination",
              type: "bullets",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }}
        >
          {this.props.images.map((image: Asset, index: number) => (
            <div key={index} className={"image"}>
              <img
                src={image.fields.file.url}
                className={"gallery-image"}
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
    const image = this.props.images[0]
    this.props.openModal({
      id: 1,
      content: `<FullscreenPreview image={${image}}/>`,
    })
  }
}

const connectedToStore =
  connect<{}, DispatchProps>(() => ({}), mapDispatchToProps)(Gallery)

export {connectedToStore as Gallery}

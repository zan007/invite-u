import * as React from "react"
import {Asset} from "contentful"
import {Col, Row} from "../grid"
import "./FullscreenPreview.scss"
import {Carousel} from "../Carousel"
import Swiper from "react-id-swiper"

interface IProps {
  images: Asset[],
  currentImageIndex?: number
}

const FullscreenPreview: React.SFC<IProps> = ({images, currentImageIndex}) => {
  function onInitSwiper(swiper: Swiper) {
    if (currentImageIndex) {
      swiper.slideTo(currentImageIndex, 0)
    }
  }

  return(
    <div className={"fullscreen-preview full-height"}>
      <Row vAlign={"middle"} hAlign={"center"} className={"full-height"}>
        <Col small={12}>
          <Carousel
            opts={{
              observer: true,
              slidesPerView: 1,
              initCallback: onInitSwiper,
              roundLengths: true,
              preventClicks: false,
              loop: true,
              centeredSlides: true,
              spaceBetween: 40,
              autoHeight: true,
              navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
              },
            }}
          >
            {images.map((image: Asset, index: number) => (
              <div key={index} className={"image"}>
                <img
                  src={image.fields.file.url}
                  alt={image.fields.description}
                />
                {image.fields.description ?
                  (<div className={"image-description"}>
                    {image.fields.description}
                  </div>) : ""}
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}
export {FullscreenPreview}

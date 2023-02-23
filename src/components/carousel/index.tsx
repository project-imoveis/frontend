import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import property from "../../assets/property.jpg";
import property2 from "../../assets/property2.jpg";
export default function NextJsCarousel({ isFixed, infiniteLoop }: any) {
  return (
    <div className={`carouselWidget ${isFixed && "carouselWidget-fixed"}`}>
      <Carousel autoPlay={true} infiniteLoop={infiniteLoop} dynamicHeight={false} interval={10000}>
        <div className="carouselWidget_imageGroup">
          <Image
            className={`carouselWidget_imageGroup_img ${
              isFixed && "carouselWidget_imageGroup_img-fixed"
            }`}
            src={property}
            alt="image1"
          />
          <p className="legend">Sala</p>
        </div>
        <div className="carouselWidget_imageGroup">
          <Image
            className={`carouselWidget_imageGroup_img ${
              isFixed && "carouselWidget_imageGroup_img-fixed"
            }`}
            src={property2}
            alt="image1"
          />
          <p className="legend">Cozinha</p>
        </div>
        <div className="carouselWidget_imageGroup">
          <Image
            className={`carouselWidget_imageGroup_img ${
              isFixed && "carouselWidget_imageGroup_img-fixed"
            }`}
            src={property}
            alt="image1"
          />
          <p className="legend">Sala</p>
        </div>
      </Carousel>
    </div>
  );
}

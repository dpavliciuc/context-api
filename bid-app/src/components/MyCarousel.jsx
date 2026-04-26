import { Carousel } from "flowbite-react";
import { createTheme } from "flowbite-react";
import carouselPics from "../json/carouselPics.json";
import carouselConf from "../json/carouselConf.json";

const MyCarousel = () => {
    const baseTheme = createTheme(carouselConf);
    return (
        <div className="carouselstyle">
          <Carousel slideInterval={4000} pauseOnHover indicators slide theme={baseTheme}>
            {carouselPics.map((image, i) => (
              <div key={i} className="relative h-full">
                <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
              </div>
            ))}
          </Carousel>
        </div> 
    )
}
export default MyCarousel;
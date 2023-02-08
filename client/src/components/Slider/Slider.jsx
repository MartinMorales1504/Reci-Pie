import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/navigation/navigation.scss";
import s from "./Slider.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


// import foodImg from "./assets/Food.svg"
// import foodImg2 from "./assets/Food2.jpg"
// import foodImg3 from "./assets/Food3.jpg"
// import foodImg4 from "./assets/Food4.jpg"

// const images = [foodImg, foodImg2, foodImg3, foodImg4]

const Slider = ({imagenes}) => {
    return (
          <Swiper
          
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
            className={s.swiper}
          >
            {imagenes && imagenes.map(image => {return <SwiperSlide className={s.swiperSlide}><img className={s.swiperSlideImg} src={image} alt="sliderImg"/></SwiperSlide>})}

          </Swiper>
      );
};

export default Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from "swiper/modules";

import bannerTeste from "../assets/images/banner/banner-full-1600x450-ia.jpg"
import bannerTeste2 from "../assets/images/banner/banner-full-1600x450-moletom.jpg"


const BannerCarousel = () => {
  return (

    <div className="" >
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        speed={1000} // Tempo da transição (1s)
        autoplay={{
          delay: 3000, // Tempo entre slides (3s)
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src={bannerTeste} alt="Imagem de um banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTeste2} alt="Imagem de um banner" />
        </SwiperSlide>


      </Swiper >
    </div >
  )
}

export default BannerCarousel;
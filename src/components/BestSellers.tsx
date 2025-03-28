import CamisetaQueen from "../assets/images/BestSellingTshirt/camiseta-queen-of-the-stones-age-aberta_495x495+fill_ffffff+crop_center.jpg"

import BestSellingTshirt from "./BestSellingTshirt"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const BestSellers = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-center text-2xl pb-10 font-oswald">AS CAMISETAS MAIS VENDIDAS DA RP STORE</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => `
          <span class="${className} w-4 h-4 mx-1 bg-red-400 opacity-75 rounded-full transition-all 
            hover:bg-blue-500 hover:scale-110  swiper-pagination-bullet"></span>
        `,
        }}
        modules={[Pagination]}
        className="mySwiper"

      >
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BestSellingTshirt
            imageSrc={CamisetaQueen}
            imageAlt="Camiseta Queen"
            title="Camiseta Quen Of The Stones"
            price={"R$80,00"}
            installmentPrice={"R$90,00"}
          />
        </SwiperSlide>
        ...
      </Swiper>
      {/* <div className="flex">

        <BestSellingTshirt
          imageSrc={CamisetaQueen}
          imageAlt="Camiseta Queen"
          title="Camiseta Quen Of The Stones"
          price={"R$80,00"}
          installmentPrice={"R$90,00"}
        />

        <BestSellingTshirt
          imageSrc={CamisetaQueen}
          imageAlt="Camiseta Queen"
          title="Camiseta Quen Of The Stones"
          price={"R$80,00"}
          installmentPrice={"R$90,00"}
        />

        <BestSellingTshirt
          imageSrc={CamisetaQueen}
          imageAlt="Camiseta Queen"
          title="Camiseta Quen Of The Stones"
          price={"R$80,00"}
          installmentPrice={"R$90,00"}
        />

        <BestSellingTshirt
          imageSrc={CamisetaQueen}
          imageAlt="Camiseta Queen"
          title="Camiseta Quen Of The Stones"
          price={"R$80,00"}
          installmentPrice={"R$90,00"}
        />


      </div> */}
    </div>
  )
}

export default BestSellers
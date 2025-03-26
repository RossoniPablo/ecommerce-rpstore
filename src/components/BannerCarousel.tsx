


// import { ReactNode } from "react";
// import Slider from "react-slick";

// interface BannerCarouselProps {
//   children: ReactNode; // Especifica que children pode ser qualquer conteúdo React
// }
// const BannerCarousel: React.FC<BannerCarouselProps> = ({ children }) => {

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     adaptiveHeight: true,
//   }
//   return (
//     <div>
//       <Slider {...settings}>
//         {children}
//       </Slider>
//     </div>
//   )
// }


// export default BannerCarousel;

const BannerCarousel = () => {
  return (
    <div className="flex items-center justify-center w-full h-60 bg-zinc-300" >
      <h1 className="">Banners</h1>
    </div>
  )
}

export default BannerCarousel;
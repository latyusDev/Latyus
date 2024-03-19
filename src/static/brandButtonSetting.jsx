import NextArrow from '../components/user/brand/NextArrow'
import PrevArrow from '../components/user/brand/PrevArrow'

export  const settings = {
    nextArrow:<NextArrow color="#BB0000" height="20px" top="16px" left="-40px"  />,
    prevArrow:<PrevArrow color="#BB0000" height="20px"  top="16px" left="-31px" />,
    infinite: true,
    speed: 1000,
    slidesToShow:4,
    slidesToScroll: 4,
    initialSlide: 0,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: false
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   }
  // ],
};

import NextArrow from '../components/user/brand/NextArrow'
import PrevArrow from '../components/user/brand/PrevArrow'

export  const settings = {
    nextArrow:<NextArrow color="#BB0000" height="20px"/>,
    prevArrow:<PrevArrow color="#BB0000" height="20px"/>,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ],
};

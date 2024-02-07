import NextArrow from '../components/user/brand/NextArrow'
import PrevArrow from '../components/user/brand/PrevArrow'

const userDetails = {
first_name:'',last_name:'',email:'',
password:'',password_confirmation:'',
phone_number:'',state:'',local_government:'',
street:'',image:''
}

const homeData = [
  'phone',
  'accessory',
    'laptop'
  ]
  const settings = {
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow/>,
    infinite: true,
    dots:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
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
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ],
};

export {settings,homeData,userDetails}
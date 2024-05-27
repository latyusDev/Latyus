import img1 from '../assets/images/p2.png'
import img2 from '../assets/images/p3.jpg'
import img3 from '../assets/images/p1.jpg'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";


const navLinks = [
  {
    id:1,
    name:'Home',
    route:''
  },
  {
    id:3,
    name:'About us',
    route:'/about'
  },
  {
    id:2,
    name:'Contact',
    route:'/contact'
  }
]

const aboutUsData = [
  {
    id:1,
    image:img3,
    title:'our vision',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:2,
    image:img1,
    title:'our approach',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:3,
    image:img2,
    title:'our process',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  }

]

const questions = [
  {
    id:1,
    question:'Do you offer discount',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:2,
    question:'How long does it take you to deliver items',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:3,
    question:'Do you also refund ',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:4,
    question:'What are your payment methods',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  },
  {
    id:5,
    question:'Is there products guarantee',
    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laudantium a earum, esse quod blanditiis! Voluptas modi unde amet adipisci omnis veniam culpa. Maiores numquam fugiat ratione sit natus eaque blanditiis voluptates ullam? Reiciendis officiis at sed impedit, alias autem?'
  }
]

const contactUsData = [
  {
    id:1,
    icon:<MdOutlineMailOutline className='text-[#BB0000]  text-4xl'/>,
    title:'email address',
    first_way:'yunusabdullateef95@gmail.com',
    second_way:'alagbada@gmail.com'
  },
  {
    id:2,
    icon:<FaPhoneFlip className='text-[#BB0000]  text-4xl'/>,
    title:'phone number',
    first_way:'07040834109',
    second_way:'08168605377'
    },
  {
    id:3,
    icon:<FaLocationDot className='text-[#BB0000]  text-4xl'/>,
    title:'office location',
    first_way:'Memudu street Lagos Nigeria',
    second_way:'Apapa Lagos Nigeria'
  },
  {
    id:4,
    icon:<FiClock className='text-[#BB0000]  text-4xl'/>,
    title:'work day',
    first_way:'sun-fri-:09:00-17:00',
    second_way:'sun-mon-:09:00-15:00'
  }

]

export {navLinks,aboutUsData,contactUsData,questions}
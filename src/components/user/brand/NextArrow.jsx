import { GrFormNext } from "react-icons/gr";

export default function NextArrow(props) {
    const { className, style,color,height, onClick } = props;
    console.log(style)
    return (
      <GrFormNext  className={className}
      style={{...style,color,height}}
      onClick={onClick}/>
    );
  }
  
import { GrFormNext } from "react-icons/gr";

export default function NextArrow(props) {
    const { className, style,color,height, onClick } = props;
    return (
      <GrFormNext  className={className}
      style={{...style,color,height}}
      onClick={onClick}/>
    );
  }
  
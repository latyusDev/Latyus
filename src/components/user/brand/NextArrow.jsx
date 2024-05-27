import { GrFormNext } from "react-icons/gr";

export default function NextArrow(props) {
    const { className, style,color,height,width,padding,border,borderRadius,top,onClick } = props;
    return (
      <GrFormNext  className={className}
      style={{...style,color,height,width,padding,border,borderRadius,top }}
      onClick={onClick}/>
    );
  }
  
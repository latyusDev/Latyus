import { GrFormPrevious } from "react-icons/gr";

export default function PrevArrow(props) {
    const { className, style,color,height,width,
      left, onClick,padding,border,borderRadius,top } = props;

    return (
      <GrFormPrevious  className={className}
      style={{...style,color,height,width,left,padding,border,borderRadius,top }}
      onClick={onClick}/>
    );
  }
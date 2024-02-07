import { GrFormPrevious } from "react-icons/gr";

export default function PrevArrow(props) {
    const { className, style,color,height, onClick } = props;

    return (
      <GrFormPrevious  className={className}
      style={{...style,color,height}}
      onClick={onClick}/>
    );
  }
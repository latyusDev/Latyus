import { GrFormPrevious } from "react-icons/gr";

export default function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrFormPrevious  className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}/>
    );
  }
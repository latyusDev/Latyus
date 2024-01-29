import { GrFormNext } from "react-icons/gr";

export default function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrFormNext  className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}/>
    );
  }
  
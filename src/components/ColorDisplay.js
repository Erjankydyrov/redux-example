import { useSelector } from "react-redux";
import ColorSimple from "./ColorSimple";

const ColorDisplay = () => {
  const color = useSelector(state => state.color);
  const style = {
    border: `10px solid ${color}`,
  };
  return (
    <div style={style}>{color}</div>
  );
}
export default ColorDisplay;
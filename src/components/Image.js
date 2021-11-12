import "./Image.css";
import { fillColour, borderColour } from "../variables";
const Image = (props) => {
  let width,
    height = 200;

  let fill = fillColour[props.Type];
  let border = "47685e";
  if (props.Type2 === "") border = borderColour[props.Type];
  else border = borderColour[props.Type2];
  return (
    <img
      className={`image`}
      height={height}
      width={width}
      style={{
        backgroundColor: `#${fill}`,
        border: `6px solid #${border}`,
      }}
      src={`${process.env.PUBLIC_URL}/images/${props.No}.png`}
      alt={props.Name}
    ></img>
  );
};

export default Image;

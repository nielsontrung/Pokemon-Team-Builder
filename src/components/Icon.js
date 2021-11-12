import "./Icon.css";
import { fillColour, borderColour } from "../variables";

const Icon = (props) => {
  let fill = fillColour[props.Type];
  let border = "47685e";
  if (props.Type2 === "") border = borderColour[props.Type];
  else border = borderColour[props.Type2];
  return (
    <img
      className={`icon`}
      height={90}
      width={90}
      style={{
        backgroundColor: `#${fill}`,
        border: `3px solid #${border}`,
      }}
      src={`${process.env.PUBLIC_URL}/icons/${props.No}.png`}
      alt={props.Name}
    ></img>
  );
};

export default Icon;

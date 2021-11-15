import { fillColour } from "../variables";
import "./Image.css";
import "./Types.css";
const Image = (props) => {
  let fill = props.Type;
  let border;
  let result;
  if (props.Type2 !== "") {
    result = (
      <div
        className={`image ${fill} `}
        style={{
          border: `16px solid #${fillColour[props.Type2]}`,
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.No}.png`}
          alt={props.Name}
        ></img>
      </div>
    );
  } else {
    border = props.Type;
    result = (
      <div className={`image ${fill} ${border}-border`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.No}.png`}
          alt={props.Name}
        ></img>
      </div>
    );
  }
  return result;
};

export default Image;

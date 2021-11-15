import "./Icon.css";
import "./Types.css";
import { missingPokemonId, fillColour } from "../variables";
const Icon = (props) => {
  let type = props.Type;
  let type2;
  if (props.Type2 !== "") type2 = props.Type2;
  else type2 = props.Type;
  let pokemon;
  if (missingPokemonId.includes(props.No)) {
    pokemon = (
      <div
        className={`${type}-light ${type2}-border icon`}
        style={{ color: `#${fillColour[type]}` }}
      >
        -
        <img
          src={`${process.env.PUBLIC_URL}/icons/${props.No}.png`}
          alt={props.Name}
        ></img>
      </div>
    );
  } else {
    pokemon = (
      <div className={`${type}-light ${type2}-border  icon`}>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${props.No}.png`}
          alt={props.Name}
        ></img>
      </div>
    );
  }
  return pokemon;
};

export default Icon;

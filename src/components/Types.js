import "./Types.css";
function Types(props) {
  let types;

  if (props.Type2 === "") {
    types = (
      <div className={`type-container`}>
        <p className={`${props.Type} type`}>{props.Type}</p>
      </div>
    );
  } else {
    types = (
      <div className={`type-container`}>
        <p className={`${props.Type} type`}>{props.Type}</p>
        <p className={`${props.Type2} type`}>{props.Type2}</p>
      </div>
    );
  }
  return types;
}

export default Types;

import "./Types.css";
function Types(props) {
  let types;
  let type = props.Type;
  let type2 = props.Type2;

  if (props.Type2 === "") {
    types = (
      <div className={`type-container`}>
        <p className={`${type} ${type}-border round-border-white-text type`}>
          {type}
        </p>
      </div>
    );
  } else {
    types = (
      <div className={`type-container`}>
        <p className={`${type} ${type}-border round-border-white-text type`}>
          {type}
        </p>
        <p className={`${type2} ${type2}-border round-border-white-text type`}>
          {type2}
        </p>
      </div>
    );
  }
  return types;
}

export default Types;

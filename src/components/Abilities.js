import ReactTooltip from "react-tooltip";
import abilitiesData from "../abilities.json";
function Abilities(props) {
  let abilities;
  if (props.Ability2 !== "") {
    let id1 = `${props.Name}-${props.Ability}`;
    let id2 = `${props.Name}-${props.Ability2}`;
    let tooltip1 = abilitiesData[props.Ability]
      .replaceAll(".", " <br/>")
      .replaceAll(",", " <br/>");
    let tooltip2 = abilitiesData[props.Ability2]
      .replaceAll(".", " <br/>")
      .replaceAll(",", " <br/>");
    abilities = (
      <div className={`ability-container`}>
        <p className={`no-margin`}>Abilities</p>
        <div style={{ display: `inline-flex` }}>
          <p data-for={id1} data-tip={tooltip1} className={`no-margin`}>
            {props.Ability}
          </p>
          <p data-for={id2} data-tip={tooltip2} className={`no-margin`}>
            {props.Ability2}
          </p>
        </div>
        <ReactTooltip
          id={id1}
          place="bottom"
          multiline={true}
          effect="solid"
        ></ReactTooltip>
        <ReactTooltip
          id={id2}
          place="bottom"
          multiline={true}
          effect="solid"
        ></ReactTooltip>
      </div>
    );
  } else {
    let id = `${props.Name}-${props.Ability}`;
    let tooltip = abilitiesData[props.Ability]
      .replaceAll(".", " <br/>")
      .replaceAll(",", " <br/>");
    abilities = (
      <div className={`ability-container`}>
        <p className={`no-margin`}>Ability</p>
        <div className={`abilities-container`}>
          <p data-for={id} data-tip={tooltip} className={`no-margin`}>
            {props.Ability}
          </p>
        </div>
        <ReactTooltip
          id={id}
          place="bottom"
          multiline={true}
          effect="solid"
        ></ReactTooltip>
      </div>
    );
  }

  let hiddenAbility;

  if (props.HiddenAbility === "") {
    hiddenAbility = (
      <div>
        <p className={`no-margin`}>Hidden Ability</p>
        <p className={`no-margin`}>None</p>
      </div>
    );
  } else {
    let id = `${props.Name}-${props.HiddenAbility}`;
    let tooltip = abilitiesData[props.HiddenAbility]
      .replaceAll(".", " <br/>")
      .replaceAll(",", " <br/>");
    hiddenAbility = (
      <div>
        <p className={`no-margin`}>Hidden Ability</p>
        <p data-for={id} data-tip={tooltip} className={`no-margin`}>
          {props.HiddenAbility}
        </p>
        <ReactTooltip
          id={id}
          place="bottom"
          multiline={true}
          effect="solid"
        ></ReactTooltip>
      </div>
    );
  }
  return (
    <div>
      {abilities}
      {hiddenAbility}
    </div>
  );
}

export default Abilities;

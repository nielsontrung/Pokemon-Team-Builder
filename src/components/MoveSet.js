import ReactTooltip from "react-tooltip";
import "./MoveSet.css";
const movesDescriptions = require("../move-description.json");
const MoveSet = (props) => {
  let moves = props.MoveSet.map((move) => {
    function getCategoryImage(category) {
      return (
        <div className={`category-img-container`}>
          <img
            className={`move-category-img`}
            src={`${process.env.PUBLIC_URL}/${category}.png`}
            alt={`${category}`}
          ></img>
        </div>
      );
    }
    // move data
    let level = move[0];
    let name = move[1];
    let category = move[3];
    let type = move[2].toLowerCase();
    let power = move[4];
    let accuracy = move[5];

    let img = getCategoryImage(category);
    let id = `${props.Name}-${name}`;
    let description = movesDescriptions[`${name}`];
    let tooltip = `${description}`;
    return (
      <div
        key={`${level}-${props.Name}-${name}`}
        data-for={id}
        data-tip={tooltip}
        className={`${type} ${type}-border round-border-white-text`}
        style={{ marginTop: `8px` }}
      >
        <div className={`move move-description-container`}>
          <p className={`margin-auto float-left`}>{`Lvl.${level} ${name} `}</p>
          <p className={`margin-auto float-right`}>{`${power} ${accuracy} `}</p>
          {img}
          <ReactTooltip
            id={id}
            place="bottom"
            multiline={true}
            effect="solid"
          ></ReactTooltip>
        </div>
      </div>
    );
  });

  return (
    <div>
      <p>Lvl Up Move Set</p>
      {moves}
    </div>
  );
};

export default MoveSet;

import "./TypeEffectiveness.css";
import { types, names, typeChart } from "../type-effectiveness-variables";
function TypeEffectiveness(props) {
  function getColumn(type) {
    let defensiveEffectiveness = [];
    for (let i = 0; i < 18; i++) {
      defensiveEffectiveness.push(typeChart[i][types[type]]);
    }
    return defensiveEffectiveness;
  }

  function getDefensiveTypeEffectiveness(type1, type2) {
    let type1Effectiveness = getColumn(type1);
    let type2Effectiveness = getColumn(type2);
    let result = [];

    if (type2 === "") {
      result = type1Effectiveness;
    } else {
      for (let i = 0; i < 18; i++) {
        let effectiveness = type1Effectiveness[i] * type2Effectiveness[i];
        if (effectiveness === 0.25) effectiveness = 0.5;
        result.push(effectiveness);
      }
    }

    let dict = {
      quadEffective: [],
      superEffective: [],
      normal: [],
      resists: [],
      immune: [],
    };

    for (let i = 0; i < 18; i++) {
      if (result[i] === 0) dict.immune.push(names[i]);
      else if (result[i] === 0.5) dict.resists.push(names[i]);
      else if (result[i] === 1) dict.normal.push(names[i]);
      else if (result[i] === 2) dict.superEffective.push(names[i]);
      else if (result[i] === 4) dict.quadEffective.push(names[i]);
    }

    return dict;
  }

  function getEffectiveness(typeEffectiveness, effectiveness) {
    let result = typeEffectiveness[effectiveness].map((type) => (
      <div
        key={`${type}-${effectiveness}`}
        className={`${type} ${type}-border round-border-white-text pancake-item`}
      >
        {type}
      </div>
    ));

    let title;
    if (effectiveness === "quadEffective") {
      title = "Takes 4x";
    } else if (effectiveness === "superEffective") {
      title = "Takes 2x";
    } else if (effectiveness === "normal") {
      title = "Takes 1x";
    } else if (effectiveness === "resists") {
      title = "Takes 0.5x";
    } else if (effectiveness === "immune") {
      title = "Takes 0x";
    }

    if (result.length) {
      return (
        <div>
          <p>{title}</p>
          <div className={"pancake-container"}>{result}</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const typeEffectiveness = getDefensiveTypeEffectiveness(
    props.Type,
    props.Type2
  );
  const hasQuad = getEffectiveness(typeEffectiveness, "quadEffective");
  const hasSuper = getEffectiveness(typeEffectiveness, "superEffective");
  const hasNormal = getEffectiveness(typeEffectiveness, "normal");
  const hasResists = getEffectiveness(typeEffectiveness, "resists");
  const hasImmune = getEffectiveness(typeEffectiveness, "immune");

  return (
    <div style={{ minHeight: `742px` }}>
      <div style={{ display: `inline-block`, verticalAlign: `top` }}>
        <p>Weaknesses</p>
        {hasQuad}
        {hasSuper}
        {hasNormal}
        {hasResists}
        {hasImmune}
      </div>
    </div>
  );
}

export default TypeEffectiveness;

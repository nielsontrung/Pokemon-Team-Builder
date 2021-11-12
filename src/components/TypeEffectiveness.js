import "./TypeEffectiveness.css";
const TypeEffectiveness = ({ team }) => {
  const types = {
    normal: 0,
    fire: 1,
    water: 2,
    electric: 3,
    grass: 4,
    ice: 5,
    fighting: 6,
    poison: 7,
    ground: 8,
    flying: 9,
    psychic: 10,
    bug: 11,
    rock: 12,
    ghost: 13,
    dragon: 14,
    dark: 15,
    steel: 16,
    fairy: 17,
  };

  const names = {
    0: "normal",
    1: "fire",
    2: "water",
    3: "electric",
    4: "grass",
    5: "ice",
    6: "fighting",
    7: "poison",
    8: "ground",
    9: "flying",
    10: " psychic",
    11: " bug",
    12: " rock",
    13: " ghost",
    14: " dragon",
    15: " dark",
    16: " steel",
    17: " fairy",
  };

  const typeChart = [
    [
      1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0,
      1.0, 0.5, 1.0,
    ], //normal
    [
      1.0, 0.5, 0.5, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 0.5,
      1.0, 2.0, 1.0,
    ], //fire
    [
      1.0, 2.0, 0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5,
      1.0, 1.0, 1.0,
    ], //water
    [
      1.0, 1.0, 2.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5,
      1.0, 1.0, 1.0,
    ], //electric
    [
      1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 0.5, 2.0, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5,
      1.0, 0.5, 1.0,
    ], //grass
    [
      1.0, 0.5, 0.5, 1.0, 2.0, 0.5, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0,
      1.0, 0.5, 1.0,
    ], //ice
    [
      2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 0.5, 0.5, 0.5, 2.0, 0.0, 1.0,
      2.0, 2.0, 0.5,
    ], //fighting
    [
      1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.5, 1.0,
      1.0, 0.0, 2.0,
    ], //poison
    [
      1.0, 2.0, 1.0, 2.0, 0.5, 1.0, 1.0, 2.0, 1.0, 0.0, 1.0, 0.5, 2.0, 1.0, 1.0,
      1.0, 2.0, 1.0,
    ], //ground
    [
      1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0,
      1.0, 0.5, 1.0,
    ], //flying
    [
      1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0,
      0.0, 0.5, 1.0,
    ], //psychic
    [
      1.0, 0.5, 1.0, 1.0, 2.0, 1.0, 0.5, 0.5, 1.0, 0.5, 2.0, 1.0, 1.0, 0.5, 1.0,
      2.0, 0.5, 0.5,
    ], //bug
    [
      1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 0.5, 2.0, 1.0, 2.0, 1.0, 1.0, 1.0,
      1.0, 0.5, 1.0,
    ], //rock
    [
      0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0,
      0.5, 1.0, 1.0,
    ], //ghost
    [
      1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0,
      1.0, 0.5, 0.0,
    ], //dragon
    [
      1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 1.0,
      0.5, 1.0, 0.5,
    ], //dark
    [
      1.0, 0.5, 0.5, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0,
      1.0, 0.5, 2.0,
    ], //steel
    [
      1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0,
      2.0, 0.5, 1.0,
    ], //fairy
  ];

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
    return typeEffectiveness[effectiveness].map((type) => (
      <div key={type} className={`${type} pancake-item`}>
        {type}
      </div>
    ));
  }

  let teamTypeEffectiveness = team.map((pokemon) => {
    const typeEffectiveness = getDefensiveTypeEffectiveness(
      pokemon.Type,
      pokemon.Type2
    );
    const hasQuad = getEffectiveness(typeEffectiveness, "quadEffective");
    const hasSuper = getEffectiveness(typeEffectiveness, "superEffective");
    const hasNormal = getEffectiveness(typeEffectiveness, "normal");
    const hasResists = getEffectiveness(typeEffectiveness, "resists");
    const hasImmune = getEffectiveness(typeEffectiveness, "immune");
    return (
      <div style={{ display: `inline-block`, verticalAlign: `top` }}>
        {hasQuad.length === 0 ? null : (
          <div>
            <p>Takes 4x</p>
            <div className={"pancake-container"}>{hasQuad}</div>
          </div>
        )}
        {hasSuper ? (
          <div>
            <p>Takes 2x</p>
            <div className={"pancake-container"}>{hasSuper}</div>
          </div>
        ) : null}
        {hasNormal ? (
          <div>
            <p>Takes 1x</p>
            <div className={"pancake-container"}>{hasNormal}</div>
          </div>
        ) : null}
        {hasResists ? (
          <div>
            <p>Takes 0.5x</p>
            <div className={"pancake-container"}>{hasResists}</div>
          </div>
        ) : null}
        {hasImmune.length === 0 ? null : (
          <div>
            <p>Takes 0x</p>
            <div className={"pancake-container"}>{hasImmune}</div>
          </div>
        )}
      </div>
    );
  });

  return teamTypeEffectiveness;
};

export default TypeEffectiveness;

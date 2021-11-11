import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// style imports
import "./index.css";
import "./styles/types.css";
import "./components/Icon.css";
import "./components/IconContainer.css";
// component imports
import BarChart from "./components/BarChart";
import TypeEffectiveness from "./components/TypeEffectiveness";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen: "all",
      gens: ["all", "1", "2", "3", "4", "5", "6", "7", "8"],
      type: "all",
      type2: "all",
      types: [
        "all",
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ],
      stat: "none",
      stats: ["None", "Hp", "Att", "Def", "SpAtt", "SpDef", "Spd", "Total"],
      name: "",
      pokemon: [],
      team: [],
      teamStats: [],
    };

    this.addTeamMember = this.addTeamMember.bind(this);
    this.removeTeamMember = this.removeTeamMember.bind(this);
  }

  componentDidMount() {
    const pokemon = require("./nationaldex.json");
    this.setState({ pokemon: pokemon });
  }

  addTeamMember = (pokemon) => {
    let updatedTeam = this.state.team;
    updatedTeam.push(pokemon);
    this.setState({ team: updatedTeam });
  };

  removeTeamMember = (pokemon) => {
    let updatedTeam = this.state.team;
    const index = updatedTeam.indexOf(pokemon);
    if (index > -1) {
      updatedTeam.splice(index, 1);
    }
    this.setState({ team: updatedTeam });
  };

  render() {
    const pokemon = this.state.pokemon;

    // used to render the dropdown filters
    const gens = this.state.gens;
    const types = this.state.types;
    const stats = this.state.stats;

    // used to filter pokemon
    const type = this.state.type;
    const type2 = this.state.type2;
    const gen = this.state.gen;
    // const stat = this.state.stat;
    const name = this.state.name;

    // styles
    const fillColour = {
      normal: "a7a87a",
      fighting: "ba2a28",
      flying: "a88eee",
      poison: "c183c1",
      ground: "ddc06c",
      rock: "b5a03f",
      bug: "a8b930",
      ghost: "705696",
      steel: "b8b8cf",
      fire: "e97e35",
      water: "6f8fee",
      grass: "7eca58",
      electric: "f4d03f",
      psychic: "f15287",
      ice: "9ed9d8",
      dragon: "722ef5",
      dark: "6e5849",
      fairy: "e997ab",
      //??? : "6da191",
    };
    const borderColour = {
      normal: "6d6d4f",
      fighting: "7d1f1a",
      flying: "6d5d9a",
      poison: "662767",
      ground: "907d47",
      rock: "766828",
      bug: "6d791f",
      ghost: "493862",
      steel: "787887",
      fire: "985222",
      water: "485d9a",
      grass: "528339",
      electric: "9e8728",
      psychic: "a13959",
      ice: "678d8d",
      dragon: "4a1e9f",
      dark: "48392f",
      fairy: "986370",
      // ???: "47685e"
    };

    const team = this.state.team;

    const filterPokemon = pokemon.filter((pokemon) => {
      let pokemonType = pokemon.Type;
      let pokemonType2 = pokemon.Type2;
      let pokemonGen = pokemon.Gen.toString();
      let pokemonName = pokemon.Name.toLowerCase();

      // get pokemon by name
      if (name === "") {
        // return pokemon from certain generation with
        // specific primary and secondary type
        if (
          pokemonGen === gen &&
          pokemonType === type &&
          pokemonType2 === type2
        )
          return pokemon;
        // get pokemon based on generation and primary type
        else if (pokemonGen === gen && pokemonType === type && type2 === "all")
          return pokemon;
        // get pokemon based on generation and secondary type
        else if (pokemonGen === gen && type === "all" && pokemonType2 === type2)
          return pokemon;
        // get pokemon based on primary and secondary type
        else if (
          gen === "all" &&
          pokemonType === type &&
          pokemonType2 === type2
        )
          return pokemon;
        // get pokemon based only on generation
        else if (pokemonGen === gen && type === "all" && type2 === "all")
          return pokemon;
        // get pokemon based only on primary type
        else if (gen === "all" && pokemonType === type && type2 === "all")
          return pokemon;
        // get pokemon based only on secondary type
        else if (gen === "all" && type === "all" && pokemonType2 === type2)
          return pokemon;
        // get all pokemon
        else if (gen === "all" && type === "all" && type2 === "all")
          return pokemon;
        else return null;
      } else {
        return pokemonName.includes(name.toLowerCase());
      }
    });

    let handleSelect = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({
        [name]: value,
      });
    };

    let handleInput = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({ [name]: value });
    };

    let width,
      height = 200;
    return (
      <div>
        <Header />
        {/* div container for team */}
        {/* <h2>Team</h2> */}
        <div className={"team-container"}>
          {team.map((pokemon) => {
            let fill = fillColour[pokemon.Type];
            let border = "47685e";
            if (pokemon.Type2 === "") border = borderColour[pokemon.Type];
            else border = borderColour[pokemon.Type2];
            let style = {
              backgroundColor: `#${fill}`,
              border: `5px solid #${border}`,
            };

            let name = <p>{pokemon.Name}</p>;

            let types;

            console.log(pokemon.Name, pokemon.Type2 === "");

            if (pokemon.Type2 === "") {
              types = (
                <div className={`type-container`}>
                  <p className={`${pokemon.Type} type`}>{pokemon.Type}</p>
                </div>
              );
            } else {
              types = (
                <div className={`type-container`}>
                  <p className={`${pokemon.Type} type`}>{pokemon.Type}</p>
                  <p className={`${pokemon.Type2} type`}>{pokemon.Type2}</p>
                </div>
              );
            }

            let abilities = (
              <div className={``}>
                <p>Ability</p>
                <p>{pokemon.Ability}</p>
                <p>{pokemon.Ability2}</p>
              </div>
            );

            let hiddenAbility;

            if (pokemon.HiddenAbility === "") {
              hiddenAbility = null;
            } else {
              hiddenAbility = (
                <div>
                  <p>Hidden Ability</p>
                  <p>{pokemon.HiddenAbility}</p>
                </div>
              );
            }

            return (
              <div className={`pokemon-container`} key={pokemon.No}>
                <img
                  src={`../assets/images/${pokemon.No}.png`}
                  alt={pokemon.Name}
                  style={style}
                  width={width}
                  height={height}
                  onClick={() => {
                    this.removeTeamMember(pokemon);
                  }}
                ></img>
                {name}
                {types}
                {/* {abilities}
                {hiddenAbility} */}
                <BarChart key={`${pokemon.No}Stats`} {...pokemon} />
              </div>
            );
          })}
        </div>
        <div id={`stats-container`} className={"stats-container"}>
          {team.map((pokemon) => {
            if (team.length !== 0) {
              return (
                <TypeEffectiveness
                  key={`${pokemon.No}Weaknesses`}
                  width={width}
                  {...pokemon}
                />
              );
            }
            return null;
          })}
        </div>
        {/* Filters */}
        <h2>Filters</h2>
        <div className={"filter-container"}>
          <div>
            <p>Gen</p>
            <select name="gen" value={this.state.gen} onChange={handleSelect}>
              {gens.map((gen) => {
                return (
                  <option key={gen} value={gen}>
                    {gen}
                  </option>
                );
              })}
            </select>
          </div>
          {/* primary type */}
          <div>
            <p>Type</p>
            <select name="type" value={this.state.type} onChange={handleSelect}>
              {types.map((type) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          {/* secondary type */}
          <div>
            <p>Type2</p>
            <select
              name="type2"
              value={this.state.type2}
              onChange={handleSelect}
            >
              {types.map((type2) => {
                return (
                  <option key={type2} value={type2}>
                    {type2}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p>Stats</p>
            <select name="stat" value={this.state.stat} onChange={handleSelect}>
              {stats.map((stat) => {
                return (
                  <option key={stat} value={stat}>
                    {stat}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p>Search</p>
            <input
              name="name"
              value={this.state.name}
              onChange={handleInput}
            ></input>
          </div>
        </div>
        {/* pokemon icons */}
        <div className={"icon-container "}>
          <ul className={``}>
            {filterPokemon.map((pokemon) => {
              let fill = fillColour[pokemon.Type];
              let border = "47685e";
              if (pokemon.Type2 === "") border = borderColour[pokemon.Type];
              else border = borderColour[pokemon.Type2];
              return (
                <li
                  className={"icon"}
                  key={pokemon.No}
                  onClick={(event) => {
                    if (
                      (team.length === 0 || team.length < 6) &&
                      !team.includes(pokemon)
                    ) {
                      this.addTeamMember(pokemon);
                    }
                  }}
                >
                  <img
                    className={`icon`}
                    height={90}
                    width={90}
                    style={{
                      backgroundColor: `#${fill}`,
                      border: `3px solid #${border}`,
                    }}
                    src={`../assets/icons/${pokemon.No}.png`}
                    alt={pokemon.Name}
                  ></img>
                  <p>
                    <b>{pokemon.Name}</b>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

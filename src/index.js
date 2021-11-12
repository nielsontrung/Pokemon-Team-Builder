import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// style imports
import "./index.css";
// component imports
import BarChart from "./components/BarChart";
import TypeEffectiveness from "./components/TypeEffectiveness";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Image from "./components/Image";
import Abilities from "./components/Abilities";
import Types from "./components/Types";
import Move from "./components/Move";
// import variables
import { gens, types, stats, abilities } from "./variables.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen: "all",
      genFilter: gens,
      type: "all",
      type2: "all",
      typeFilter: types,
      stat: "None",
      statFilter: stats,
      ability: "None",
      abilityFilter: abilities,
      name: "",
      pokemon: [],
      team: [],
      teamStats: [],
      teamMoveSet: [],
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

    // used to update and render the dropdown filters
    const gens = this.state.genFilter;
    const types = this.state.typeFilter;
    const stats = this.state.statFilter;
    const abilities = this.state.abilityFilter;

    // used to filter pokemon
    const type = this.state.type;
    const type2 = this.state.type2;
    const gen = this.state.gen;
    const stat = this.state.stat;
    const ability = this.state.ability;
    const name = this.state.name;
    const team = this.state.team;

    const filterPokemon = pokemon.filter((pokemon) => {
      // get pokemon by gen type or type2
      if (name === "") {
        if (ability !== "None") {
          return (
            pokemon.Ability === ability ||
            pokemon.Ability2 === ability ||
            pokemon.HiddenAbility === ability
          );
        } else {
          let pokemonGen = pokemon.Gen.toString();
          // get pokemon from certain generation with specific primary and secondary type
          if (
            pokemonGen === gen &&
            pokemon.Type === type &&
            pokemon.Type2 === type2
          )
            return pokemon;
          // get pokemon based on generation and primary type
          else if (
            pokemonGen === gen &&
            pokemon.Type === type &&
            type2 === "all"
          )
            return pokemon;
          // get pokemon based on generation and secondary type
          else if (
            pokemonGen === gen &&
            type === "all" &&
            pokemon.Type2 === type2
          )
            return pokemon;
          // get pokemon based on primary and secondary type
          else if (
            gen === "all" &&
            pokemon.Type === type &&
            pokemon.Type2 === type2
          )
            return pokemon;
          // get pokemon based only on generation
          else if (pokemonGen === gen && type === "all" && type2 === "all")
            return pokemon;
          // get pokemon based only on primary type
          else if (gen === "all" && pokemon.Type === type && type2 === "all")
            return pokemon;
          // get pokemon based only on secondary type
          else if (gen === "all" && type === "all" && pokemon.Type2 === type2)
            return pokemon;
          // get all pokemon based on type from specific gen
          else if (pokemonGen === gen && type === type2)
            return pokemon.Type === type || pokemon.Type2 === type2;
          // get all pokemon
          else if (gen === "all" && type === "all" && type2 === "all") {
            return pokemon;
            // get all pokemon based on type
          } else if (gen === "all" && type === type2)
            return pokemon.Type === type || pokemon.Type2 === type2;
          else return null;
        }
      } else {
        // get pokemon by name
        return pokemon.Name.toLowerCase().includes(name.toLowerCase());
      }
    });

    let ascending = false;
    // sort pokemon based on specific stat in ascending or descending order
    if (ascending) {
      if (stat === "None") {
      } else if (stat === "Hp") {
        filterPokemon.sort(function (a, b) {
          return a.HP - b.HP;
        });
      } else if (stat === "Att") {
        filterPokemon.sort(function (a, b) {
          return a.Att - b.Att;
        });
      } else if (stat === "Def") {
        filterPokemon.sort(function (a, b) {
          return b.Def - a.Def;
        });
      } else if (stat === "SpAtt") {
        filterPokemon.sort(function (a, b) {
          return a.SpAtt - b.SpAtt;
        });
      } else if (stat === "SpDef") {
        filterPokemon.sort(function (a, b) {
          return a.SpDef - b.SpDef;
        });
      } else if (stat === "Spd") {
        filterPokemon.sort(function (a, b) {
          return a.Spd - b.Spd;
        });
      } else if (stat === "Total") {
        filterPokemon.sort(function (a, b) {
          return a.Total - b.Total;
        });
      }
    } else {
      if (stat === "None") {
      } else if (stat === "Hp") {
        filterPokemon.sort(function (a, b) {
          return b.HP - a.HP;
        });
      } else if (stat === "Att") {
        filterPokemon.sort(function (a, b) {
          return b.Att - a.Att;
        });
      } else if (stat === "Def") {
        filterPokemon.sort(function (a, b) {
          return b.Def - a.Def;
        });
      } else if (stat === "SpAtt") {
        filterPokemon.sort(function (a, b) {
          return b.SpAtt - a.SpAtt;
        });
      } else if (stat === "SpDef") {
        filterPokemon.sort(function (a, b) {
          return b.SpDef - a.SpDef;
        });
      } else if (stat === "Spd") {
        filterPokemon.sort(function (a, b) {
          return b.Spd - a.Spd;
        });
      } else if (stat === "Total") {
        filterPokemon.sort(function (a, b) {
          return b.Total - a.Total;
        });
      }
    }

    let handleFilter = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({
        [name]: value,
      });
    };

    return (
      <div>
        <Header />
        <div className={"team-container"}>
          {team.map((pokemon) => {
            let name = (
              <p className={`no-margin-bottom`} style={{ fontSize: `18px` }}>
                {pokemon.Name}
              </p>
            );
            return (
              <div className={`pokemon-container`} key={pokemon.No}>
                <div
                  onClick={() => {
                    this.removeTeamMember(pokemon);
                  }}
                >
                  <Image {...pokemon} />
                </div>
                {name}
                <Types {...pokemon} />
                <Abilities {...pokemon} />
                <BarChart key={`${pokemon.No}-Stats`} {...pokemon} />
              </div>
            );
          })}
        </div>
        <div className={"type-effectiveness-container"}>
          <TypeEffectiveness team={team} />
        </div>
        <div className={`move-set-container`}>
          {team.map((pokemon) => {
            return (
              <div
                key={`${pokemon.No}`}
                style={{
                  display: `inline-block`,
                  verticalAlign: `top`,
                }}
              >
                <Move key={`${pokemon.No}-MoveSet`} {...pokemon} />
              </div>
            );
          })}
        </div>
        <h2>Filters</h2>
        <div className={"filter-container"}>
          <div className={"filter-item"}>
            <p>Gen</p>
            <select name="gen" value={this.state.gen} onChange={handleFilter}>
              {gens.map((gen) => {
                return (
                  <option key={gen} value={gen}>
                    {gen}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={"filter-item"}>
            <p>Type</p>
            <select name="type" value={this.state.type} onChange={handleFilter}>
              {types.map((type) => {
                return (
                  <option key={type} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={"filter-item"}>
            <p>Type2</p>
            <select
              name="type2"
              value={this.state.type2}
              onChange={handleFilter}
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
          <div className={"filter-item"}>
            <p>Ability</p>
            <select
              name="ability"
              value={this.state.ability}
              onChange={handleFilter}
            >
              {abilities.map((ability) => {
                return (
                  <option key={ability} value={ability}>
                    {ability}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={"filter-item"}>
            <p>Stats</p>
            <select name="stat" value={this.state.stat} onChange={handleFilter}>
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
              onChange={handleFilter}
            ></input>
          </div>
        </div>
        <div className={"icon-container"}>
          <ul>
            {filterPokemon.map((pokemon) => {
              return (
                <li
                  className={"icon"}
                  key={pokemon.No}
                  onClick={() => {
                    if (
                      (team.length === 0 || team.length < 6) &&
                      !team.includes(pokemon)
                    ) {
                      this.addTeamMember(pokemon);
                    }
                  }}
                >
                  <Icon {...pokemon} />
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

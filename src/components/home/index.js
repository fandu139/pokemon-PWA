import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../uikit/flex";
import PokemonSmallCard from "../../uikit/smallCard";
import Layout from "../layout";
import Header from "./header";
import Footer from "./footer";
import IFRender from "../../lib/ifrender";
import ButtonCostum from "../../uikit/button"
import Loading from "../../uikit/loading"
import theme from "../../config/styleConst";

function Products({ data }) {
  return data.map(item => {
    return (
      <PokemonSmallCard
        key={item.id}
        id={item.id}
        image={item.image}
        imageAlt={item.name}
        title={item.name}
        fastAttack={item.attacks}
        specialAttack={item.attacks}
        maxHP={item.maxHP}
        classification={item.classification}
        resistant={item.resistant}
        weaknesses={item.weaknesses}
      />
    );
  });
}

function getData({page, setData}) {
  // const totalData = page * 10;
  // axios({
  //   url: "https://graphql-pokemon.now.sh/",
  //   method: "post",
  //   data: {
  //     query: `
  //       query pokemon{
  //         pokemons(first: ${totalData}) {
  //           id
  //           name
  //           number
  //           classification
  //           types
  //           resistant
  //           attacks {
  //             fast {
  //               name
  //               type
  //               damage
  //             }
  //             special {
  //               name
  //               type
  //               damage
  //             }
  //           }
  //           weaknesses
  //           fleeRate
  //           maxCP
  //           evolutions {
  //             id
  //             number
  //           }
  //           evolutionRequirements{
  //             amount
  //             name
  //           }
  //           maxHP
  //           image
  //         }
  //       }
  //     `
  //   }
  // }).then(result => {
  //   setData(result.data.data.pokemons);
  // });

  const result = {
    "data": {
      "pokemons": [
        {
          "id": "UG9rZW1vbjowMDE=",
          "name": "Bulbasaur",
          "number": "001",
          "classification": "Seed Pokémon",
          "types": [
            "Grass",
            "Poison"
          ],
          "resistant": [
            "Water",
            "Electric",
            "Grass",
            "Fighting",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Tackle",
                "type": "Normal",
                "damage": 12
              },
              {
                "name": "Vine Whip",
                "type": "Grass",
                "damage": 7
              }
            ],
            "special": [
              {
                "name": "Power Whip",
                "type": "Grass",
                "damage": 70
              },
              {
                "name": "Seed Bomb",
                "type": "Grass",
                "damage": 40
              },
              {
                "name": "Sludge Bomb",
                "type": "Poison",
                "damage": 55
              }
            ]
          },
          "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
          ],
          "fleeRate": 0.1,
          "maxCP": 951,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDI=",
              "number": "002"
            },
            {
              "id": "UG9rZW1vbjowMDM=",
              "number": "003"
            }
          ],
          "evolutionRequirements": {
            "amount": 25,
            "name": "Bulbasaur candies"
          },
          "maxHP": 1071,
          "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDI=",
          "name": "Ivysaur",
          "number": "002",
          "classification": "Seed Pokémon",
          "types": [
            "Grass",
            "Poison"
          ],
          "resistant": [
            "Water",
            "Electric",
            "Grass",
            "Fighting",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Razor Leaf",
                "type": "Grass",
                "damage": 15
              },
              {
                "name": "Vine Whip",
                "type": "Grass",
                "damage": 7
              }
            ],
            "special": [
              {
                "name": "Power Whip",
                "type": "Grass",
                "damage": 70
              },
              {
                "name": "Sludge Bomb",
                "type": "Poison",
                "damage": 55
              },
              {
                "name": "Solar Beam",
                "type": "Grass",
                "damage": 120
              }
            ]
          },
          "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
          ],
          "fleeRate": 0.07,
          "maxCP": 1483,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDM=",
              "number": "003"
            }
          ],
          "evolutionRequirements": {
            "amount": 100,
            "name": "Bulbasaur candies"
          },
          "maxHP": 1632,
          "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDM=",
          "name": "Venusaur",
          "number": "003",
          "classification": "Seed Pokémon",
          "types": [
            "Grass",
            "Poison"
          ],
          "resistant": [
            "Water",
            "Electric",
            "Grass",
            "Fighting",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Razor Leaf",
                "type": "Grass",
                "damage": 15
              },
              {
                "name": "Vine Whip",
                "type": "Grass",
                "damage": 7
              }
            ],
            "special": [
              {
                "name": "Petal Blizzard",
                "type": "Grass",
                "damage": 65
              },
              {
                "name": "Sludge Bomb",
                "type": "Poison",
                "damage": 55
              },
              {
                "name": "Solar Beam",
                "type": "Grass",
                "damage": 120
              }
            ]
          },
          "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
          ],
          "fleeRate": 0.05,
          "maxCP": 2392,
          "evolutions": null,
          "evolutionRequirements": null,
          "maxHP": 2580,
          "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDQ=",
          "name": "Charmander",
          "number": "004",
          "classification": "Lizard Pokémon",
          "types": [
            "Fire"
          ],
          "resistant": [
            "Fire",
            "Grass",
            "Ice",
            "Bug",
            "Steel",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Ember",
                "type": "Fire",
                "damage": 10
              },
              {
                "name": "Scratch",
                "type": "Normal",
                "damage": 6
              }
            ],
            "special": [
              {
                "name": "Flame Burst",
                "type": "Fire",
                "damage": 30
              },
              {
                "name": "Flame Charge",
                "type": "Fire",
                "damage": 25
              },
              {
                "name": "Flamethrower",
                "type": "Fire",
                "damage": 55
              }
            ]
          },
          "weaknesses": [
            "Water",
            "Ground",
            "Rock"
          ],
          "fleeRate": 0.1,
          "maxCP": 841,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDU=",
              "number": "005"
            },
            {
              "id": "UG9rZW1vbjowMDY=",
              "number": "006"
            }
          ],
          "evolutionRequirements": {
            "amount": 25,
            "name": "Charmander candies"
          },
          "maxHP": 955,
          "image": "https://img.pokemondb.net/artwork/charmander.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDU=",
          "name": "Charmeleon",
          "number": "005",
          "classification": "Flame Pokémon",
          "types": [
            "Fire"
          ],
          "resistant": [
            "Fire",
            "Grass",
            "Ice",
            "Bug",
            "Steel",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Ember",
                "type": "Fire",
                "damage": 10
              },
              {
                "name": "Scratch",
                "type": "Normal",
                "damage": 6
              }
            ],
            "special": [
              {
                "name": "Fire Punch",
                "type": "Fire",
                "damage": 40
              },
              {
                "name": "Flame Burst",
                "type": "Fire",
                "damage": 30
              },
              {
                "name": "Flamethrower",
                "type": "Fire",
                "damage": 55
              }
            ]
          },
          "weaknesses": [
            "Water",
            "Ground",
            "Rock"
          ],
          "fleeRate": 0.07,
          "maxCP": 1411,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDY=",
              "number": "006"
            }
          ],
          "evolutionRequirements": {
            "amount": 100,
            "name": "Charmander candies"
          },
          "maxHP": 1557,
          "image": "https://img.pokemondb.net/artwork/charmeleon.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDY=",
          "name": "Charizard",
          "number": "006",
          "classification": "Flame Pokémon",
          "types": [
            "Fire",
            "Flying"
          ],
          "resistant": [
            "Fire",
            "Grass",
            "Fighting",
            "Bug",
            "Steel",
            "Fairy"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Ember",
                "type": "Fire",
                "damage": 10
              },
              {
                "name": "Wing Attack",
                "type": "Flying",
                "damage": 9
              }
            ],
            "special": [
              {
                "name": "Dragon Claw",
                "type": "Dragon",
                "damage": 35
              },
              {
                "name": "Fire Blast",
                "type": "Fire",
                "damage": 100
              },
              {
                "name": "Flamethrower",
                "type": "Fire",
                "damage": 55
              }
            ]
          },
          "weaknesses": [
            "Water",
            "Electric",
            "Rock"
          ],
          "fleeRate": 0.05,
          "maxCP": 2413,
          "evolutions": null,
          "evolutionRequirements": null,
          "maxHP": 2602,
          "image": "https://img.pokemondb.net/artwork/charizard.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDc=",
          "name": "Squirtle",
          "number": "007",
          "classification": "Tiny Turtle Pokémon",
          "types": [
            "Water"
          ],
          "resistant": [
            "Fire",
            "Water",
            "Ice",
            "Steel"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Bubble",
                "type": "Water",
                "damage": 25
              },
              {
                "name": "Tackle",
                "type": "Normal",
                "damage": 12
              }
            ],
            "special": [
              {
                "name": "Aqua Jet",
                "type": "Water",
                "damage": 25
              },
              {
                "name": "Aqua Tail",
                "type": "Water",
                "damage": 45
              },
              {
                "name": "Water Pulse",
                "type": "Water",
                "damage": 35
              }
            ]
          },
          "weaknesses": [
            "Electric",
            "Grass"
          ],
          "fleeRate": 0.1,
          "maxCP": 891,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDg=",
              "number": "008"
            },
            {
              "id": "UG9rZW1vbjowMDk=",
              "number": "009"
            }
          ],
          "evolutionRequirements": {
            "amount": 25,
            "name": "Squirtle candies"
          },
          "maxHP": 1008,
          "image": "https://img.pokemondb.net/artwork/squirtle.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDg=",
          "name": "Wartortle",
          "number": "008",
          "classification": "Turtle Pokémon",
          "types": [
            "Water"
          ],
          "resistant": [
            "Fire",
            "Water",
            "Ice",
            "Steel"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Bite",
                "type": "Dark",
                "damage": 6
              },
              {
                "name": "Water Gun",
                "type": "Water",
                "damage": 6
              }
            ],
            "special": [
              {
                "name": "Aqua Jet",
                "type": "Water",
                "damage": 25
              },
              {
                "name": "Gunk Shot",
                "type": "Poison",
                "damage": 65
              },
              {
                "name": "Hydro Pump",
                "type": "Water",
                "damage": 90
              },
              {
                "name": "Ice Beam",
                "type": "Ice",
                "damage": 65
              }
            ]
          },
          "weaknesses": [
            "Electric",
            "Grass"
          ],
          "fleeRate": 0.07,
          "maxCP": 1435,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMDk=",
              "number": "009"
            }
          ],
          "evolutionRequirements": {
            "amount": 100,
            "name": "Squirtle candies"
          },
          "maxHP": 1582,
          "image": "https://img.pokemondb.net/artwork/wartortle.jpg"
        },
        {
          "id": "UG9rZW1vbjowMDk=",
          "name": "Blastoise",
          "number": "009",
          "classification": "Shellfish Pokémon",
          "types": [
            "Water"
          ],
          "resistant": [
            "Fire",
            "Water",
            "Ice",
            "Steel"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Bite",
                "type": "Dark",
                "damage": 6
              },
              {
                "name": "Water Gun",
                "type": "Water",
                "damage": 6
              }
            ],
            "special": [
              {
                "name": "Flash Cannon",
                "type": "Steel",
                "damage": 60
              },
              {
                "name": "Gunk Shot",
                "type": "Poison",
                "damage": 65
              },
              {
                "name": "Hydro Pump",
                "type": "Water",
                "damage": 90
              },
              {
                "name": "Ice Beam",
                "type": "Ice",
                "damage": 65
              }
            ]
          },
          "weaknesses": [
            "Electric",
            "Grass"
          ],
          "fleeRate": 0.05,
          "maxCP": 2355,
          "evolutions": null,
          "evolutionRequirements": null,
          "maxHP": 2542,
          "image": "https://img.pokemondb.net/artwork/blastoise.jpg"
        },
        {
          "id": "UG9rZW1vbjowMTA=",
          "name": "Caterpie",
          "number": "010",
          "classification": "Worm Pokémon",
          "types": [
            "Bug"
          ],
          "resistant": [
            "Grass",
            "Fighting",
            "Ground"
          ],
          "attacks": {
            "fast": [
              {
                "name": "Bug Bite",
                "type": "Bug",
                "damage": 5
              },
              {
                "name": "Tackle",
                "type": "Normal",
                "damage": 12
              }
            ],
            "special": [
              {
                "name": "Struggle",
                "type": "Normal",
                "damage": 15
              }
            ]
          },
          "weaknesses": [
            "Fire",
            "Flying",
            "Rock"
          ],
          "fleeRate": 0.2,
          "maxCP": 367,
          "evolutions": [
            {
              "id": "UG9rZW1vbjowMTE=",
              "number": "011"
            },
            {
              "id": "UG9rZW1vbjowMTI=",
              "number": "012"
            }
          ],
          "evolutionRequirements": {
            "amount": 12,
            "name": "Caterpie candies"
          },
          "maxHP": 443,
          "image": "https://img.pokemondb.net/artwork/caterpie.jpg"
        }
      ]
    }
  }

  setData(result.data.pokemons);
}

function ProductList({ match }) {
  const [data, setData] = useState('');
  const [page, setPage] = useState(1)

  useEffect(() => {
    getData({page, setData});
  }, [page]);

  function handleAddItem() {
    setPage(page + 1)
  }

  const title = "Pokemon List";

  return (
    <Layout
      title="Product List"
      navigation={{
        component: <Header variant="detail" title={title} />
      }}
      footer={{
        component: <Footer variant="product-list" keyword={title} />
      }}
    >
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        <IFRender
          condition={data !== ''}
          ifComponent={
            <Products data={data} />
          }
          elseComponent={
            <Loading />
          }
        />
      </Flex>
      <IFRender
        condition={data !== ''}
        ifComponent={
          <ButtonCostum addItem={handleAddItem}/>
        }
      />
    </Layout>
  );
}

export default ProductList;

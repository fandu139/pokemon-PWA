import React from "react";
import Render from 'react-test-renderer';
import Filter, { getFilterData } from './filter';

describe('Home Pokemon', () => {

  const dataCategoryDummy = ["Grass", "Poison", "Fire", "Flying", "Water", "Bug"]
  const dataDummy = [
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
    }
  ]

  test('Home Filter SnapShoot', () => {
    const props = { 
      dataCategory: dataCategoryDummy,
      data: dataDummy,
      setData: jest.fn(),
      press: jest.fn(),
      dataFilter: dataDummy, 
      setDataFilter: jest.fn()
    };

    const component = Render.create(<Filter {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Function getFilterData', () => {
    const props = { 
      item: dataDummy[0], 
      setData: () => { return true }, 
      dataFilter: dataDummy
    };
    const result = getFilterData(props)
    expect(result).toBe(true)
  });
});

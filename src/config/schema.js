export function queryGQL(totalData){
  return `
    query pokemon{
      pokemons(first: ${totalData}) {
        id
        name
        number
        classification
        types
        resistant
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          number
        }
        evolutionRequirements{
          amount
          name
        }
        maxHP
        image
      }
    }
  `
}

export function queryGQLPokemon(id){
  return `
    query pokemon{
      pokemon(id: "${id}") {
        id
        name
        number
        classification
        types
        resistant
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        weaknesses
        fleeRate
        maxCP
        evolutions {
          id
          number
        }
        evolutionRequirements{
          amount
          name
        }
        maxHP
        image
      }
    }
  `
}

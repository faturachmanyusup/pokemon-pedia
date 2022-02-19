import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        dreamworld
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        back_default
        back_shiny
        front_default
        front_shiny
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;


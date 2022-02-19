import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export function Provider({ children }) {
  const [myPokemon, setMyPokemon] = useState([]);
  const { pathname } = useRouter();

  useEffect(() => {
    const localPokemon = getLocalPokemon();

    setMyPokemon(localPokemon);
  }, [pathname])

  const getLocalPokemon = () => {
    return JSON.parse(localStorage.getItem('my-pokemon') || '[]');
  }

  const setLocalPokemon = (state) => {
    localStorage.setItem('my-pokemon', JSON.stringify(state));
  }

  const addPokemon = (pokemon, localName) => {
    if (myPokemon.find(localPokemon => localPokemon.local_name === localName)) {
      throw {
        message: 'DUPLICATE NAME'
      }
    }

    // eslint-disable-next-line camelcase
    const updatedState = [...myPokemon, { ...pokemon, local_name: localName }];

    setMyPokemon(updatedState);
    setLocalPokemon(updatedState);
  }

  const removePokemon = (localName) => {
    const updatedState = myPokemon.filter(pokemon =>
      pokemon.local_name.toLowerCase() !== localName.toLowerCase()
    )

    setMyPokemon(updatedState);
    setLocalPokemon(updatedState);
  }

  const countPokemon = (name) => {
    return myPokemon
      .filter(pokemon => pokemon.name === name)
      .length
  }

  const getPokemon = async (name) => {
    const pokemons = getLocalPokemon();
    const selectedPokemon =
      pokemons.find(pokemon => pokemon.local_name.toLowerCase() === name.toLowerCase());

    if (!selectedPokemon) {
      throw { code: 'CANNOT FIND POKEMON' };
    }

    return selectedPokemon;
  }

  return (
    <Context.Provider
      value={{
        myPokemon,
        addPokemon,
        removePokemon,
        countPokemon,
        getPokemon
      }}
    >
      {children}
    </Context.Provider>
  )
}

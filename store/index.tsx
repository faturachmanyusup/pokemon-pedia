import { useRouter } from 'next/router';
import { createContext, useEffect, useState, ReactNode } from 'react';
import { MyPokemon, Pokemon } from 'types/pokemon';
import { StoreContextType } from 'types/store';

export const Context = createContext<StoreContextType>({} as StoreContextType);

interface ProviderProps {
  children: ReactNode;
}

interface DuplicateNameError {
  message: string;
}

interface PokemonNotFoundError {
  code: string;
}

export function Provider({ children }: ProviderProps): JSX.Element {
  const [myPokemon, setMyPokemon] = useState<MyPokemon[]>([]);
  const { pathname } = useRouter();

  useEffect(() => {
    const localPokemon = getLocalPokemon();

    setMyPokemon(localPokemon);
  }, [pathname]);

  const getLocalPokemon = (): MyPokemon[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('my-pokemon') || '[]');
  };

  const setLocalPokemon = (state: MyPokemon[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('my-pokemon', JSON.stringify(state));
  };

  const addPokemon = (pokemon: Pokemon, localName: string): void => {
    if (myPokemon.find(localPokemon => localPokemon.local_name === localName)) {
      const error: DuplicateNameError = {
        message: 'DUPLICATE NAME'
      };
      throw error;
    }

    // eslint-disable-next-line camelcase
    const updatedState: MyPokemon[] = [...myPokemon, { ...pokemon, local_name: localName }];

    setMyPokemon(updatedState);
    setLocalPokemon(updatedState);
  };

  const removePokemon = (localName: string): void => {
    const updatedState = myPokemon.filter(pokemon =>
      pokemon.local_name.toLowerCase() !== localName.toLowerCase()
    );

    setMyPokemon(updatedState);
    setLocalPokemon(updatedState);
  };

  const countPokemon = (name: string): number => {
    return myPokemon
      .filter(pokemon => pokemon.name === name)
      .length;
  };

  const getPokemon = async (name: string): Promise<MyPokemon> => {
    const pokemons = getLocalPokemon();
    const selectedPokemon = pokemons.find(pokemon => pokemon.local_name.toLowerCase() === name.toLowerCase());

    if (!selectedPokemon) {
      const error: PokemonNotFoundError = { code: 'CANNOT FIND POKEMON' };
      throw error;
    }

    return selectedPokemon;
  };

  return (
    <Context.Provider value={{ myPokemon, addPokemon, removePokemon, countPokemon, getPokemon }}>
      {children}
    </Context.Provider>
  );
}

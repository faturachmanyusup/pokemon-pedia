import { MyPokemon, Pokemon } from './pokemon';

export interface StoreContextType {
  myPokemon: MyPokemon[];
  addPokemon: (pokemon: Pokemon, localName: string) => void;
  removePokemon: (localName: string) => void;
  countPokemon: (name: string) => number;
  getPokemon: (name: string) => Promise<MyPokemon>;
}

export const defaultStoreContext: StoreContextType = {} as StoreContextType;

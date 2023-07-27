import { useContext } from 'react';
import Link from 'next/link';
import { Container } from 'components/container';
import { PokemonCard } from 'components/card';
import { Context } from 'store';
import { ContainerList } from 'components/container';
import { SEO } from 'components/seo';

export default function MyPokemon() {
  const { myPokemon } = useContext(Context);

  return (
    <Container>
      <SEO
        title="Pokemon Pedia - My Pokemon"
        description="My Pokemon List"
      />
      <ContainerList>
        {myPokemon.map((pokemon, idx) => {
          return (
            <Link key={idx + 1} href={`/my-pokemon/${pokemon.local_name.toLowerCase()}`} passHref>
              <PokemonCard
                id={idx + 1}
                img={pokemon.dreamworld}
                labelLeft={pokemon.local_name}
                labelRight={pokemon.name.toUpperCase()}
              />
            </Link>
          );
        })}
      </ContainerList>
    </Container>
  )
}

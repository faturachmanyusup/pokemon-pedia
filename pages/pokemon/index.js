import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMON } from 'gpql/query';
import {
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Context } from 'store';

import { PageLoader } from 'components/loader';
import { Container, ContainerList } from 'components/container';
import { PokemonCard } from 'components/card';
import { SEO } from 'components/seo';

const Shimmer = dynamic(() =>
  import('components/loader').then(mod => mod.Shimmer)
);

export default function PokemonList() {
  const context = useContext(Context);
  const router = useRouter();
  const observerRef = useRef();
  const limit = 30;

  const [pokemons, setPokemons] = useState([]);
  const [isBottom, setIsBottom] = useState(false);

  let observer

  const [queryGetPokemons, { loading, error }] = useLazyQuery(GET_POKEMON);

  useEffect(() => {
    getPokemons();
  }, [])

  useEffect(() => {
    observer = new IntersectionObserver(observerCallback, {
      threshold: 1
    })

    if (!observerRef.current || isBottom) return

    observer.observe(observerRef.current)
  }, [pokemons.length])

  useEffect(() => {
    if (error) {
      router.push('/500')
    }
  }, [pokemons])

  const getPokemons = () => {
    queryGetPokemons({
      variables: { limit, offset: pokemons.length },
      onCompleted: res => {
        if (res.pokemons.results.length < limit) {
          setIsBottom(true);
        }

        setPokemons([...pokemons, ...res.pokemons.results]);
      },
      onError: (err) => {
        setError(err);
      }
    })
  }

  const observerCallback = ([entry]) => {
    if (!entry.isIntersecting) {
      return
    }

    getPokemons();

    return;
  }

  return (
    <Container dataTestId="pokemon">
      <SEO
        title="Pokemon Pedia | Pokemon"
        description="Pokemon List"
      />
      {loading && !pokemons.length
        ? <PageLoader />
        : (
          <>
            <ContainerList>
              {pokemons.map(pokemon => {
                return (
                  <Link key={pokemon.id} href={`/pokemon/${pokemon.name}`} passHref>
                    <PokemonCard
                      id={pokemon.id}
                      img={pokemon.dreamworld}
                      labelLeft={pokemon.name}
                      labelRight={`You have: ${context.countPokemon(pokemon.name)}`}
                    />
                  </Link>
                );
              })}
            </ContainerList>
            {loading
              ? <Shimmer />
              : (
                <div
                  ref={observerRef}
                  css={css({
                    marginTop: '-40rem',
                    backgroundColor: 'red',
                    height: '1px'
                  })}
                ></div>
              )
            }
          </>
        )
      }
    </Container>
  )
}

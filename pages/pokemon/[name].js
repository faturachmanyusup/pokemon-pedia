import { client } from 'gpql/index';
import { GET_POKEMON_DETAIL, GET_POKEMON } from 'gpql/query';
import { css } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import { Context } from 'store';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { Container } from 'components/container';
import { Input } from 'components/input';
import { Button } from 'components/button';
import {
  BaseStatus,
  OtherSection,
  PokemonName
} from 'components/section/SectionDetail';
import { Preview } from 'components/image';
import { Main, Side } from 'components/layout';
import { SEO } from 'components/seo';
import { Spinner } from 'components/loader';

import { catching } from 'helpers/random';
import { capitalize } from 'helpers/letter';

export default function PokemonDetail(props) {
  const context = useContext(Context);
  const router = useRouter();
  const [queryGetPokemons, { data }] = useLazyQuery(GET_POKEMON);

  const [overallStat, setOverallStat] = useState(0);
  const [localName, setLocalName] = useState('');
  const [loading, setLoading] = useState(false);

  // '', 'success', 'failed'
  const [catchStatus, setCatchStatus] = useState('');
  const [hasCaught, setHasCaught] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let sumPoints = 0;
    let countStats = 0;

    props.pokemon.stats.map(stat => {
      sumPoints += stat.base_stat;
      countStats += 1;
    })

    setOverallStat(Math.floor(sumPoints / countStats));
  }, [])

  const catchPokemon = () => {
    setLoading(true);

    if (data) {
      const to = setTimeout(() => {
        const result = catching();

        setCatchStatus(result);
        setLoading(false);
        clearTimeout(to);
      }, 1000)
      return;
    }

    queryGetPokemons({
      variables: { limit: 1, offset: props.pokemon.id - 1 },
      onCompleted: () => {
        const result = catching();

        setCatchStatus(result);
        setLoading(false);
      },
      onError: () => {
        router.push('/500');
      }
    })
  }

  const savePokemon = (e) => {
    e.preventDefault();

    try {
      context.addPokemon(data.pokemons.results[0], localName);

      setError(null);
      setHasCaught(true);
      setCatchStatus('');
      setLocalName('');
    } catch (err) {
      setError(err);
    }
  }

  return (
    <Container display='flex' direction={['column', 'column', 'row']} gap='0 5rem'>
      <SEO
        title={`Pokemon Pedia - ${capitalize(props.pokemon.name)}`}
        description={`${props.pokemon.name} Detail`}
        path={`/pokemon/${props.pokemon.name}`}
      />
      <Side>
        <Preview images={Object.values(props.pokemon.sprites)} />

        {catchStatus !== 'success'
          ? (
            <Button
              data-testid="catch-button"
              type='button'
              className='flex-row justify-content-center'
              onClick={catchPokemon}
            >
              {loading
                ? <Spinner data-testid="spinner" />
                : (
                  <>
                    {catchStatus === '' && (
                      hasCaught ? 'Catch Again!' : 'Catch Me!'
                    )}
        
                    {catchStatus === 'failed' && 'Try Again!'}
                  </>
                )
              }
            </Button>
          )
          : (
            <>
              <form
                className='flex-row justify-content-between align-items-center'
                onSubmit={savePokemon}
              >
                <Input
                  placeholder="Input name here.."
                  value={localName}
                  onChange={(e) => setLocalName(e.target.value)}
                />
                <Button
                  type='submit'
                  css={{
                    padding: '0 1rem',
                    color: '#ffffff',
                    backgroundColor: 'green',
                    marginLeft: '1.5rem',
                  }}
                >
                  Save
                </Button>
              </form>
              {error?.message === 'DUPLICATE NAME'
                ? <p css={css({ color: 'red' })}>Name unavailable. Try another name.</p>
                : (
                  <p>
                    Congrats! <strong className='capitalize'>{props.pokemon.name}</strong> was caught.
                    <br />
                    Let&apos;s give him/her a name.
                  </p>
                )
              }
            </>
          )
        }

        {catchStatus === 'failed' && (
          <p className='text-center'>
            Ooopss! <strong className='capitalize'>{props.pokemon.name}</strong> broke free.
          </p>
        )}
      </Side>
      <Main css={{ gap: '1rem 0' }}>
        <PokemonName name={props.pokemon.name} overallStat={overallStat} types={props.pokemon.types} />
        <BaseStatus stats={props.pokemon.stats} />
        <OtherSection title="Abilities" others={props.pokemon.abilities} />
        <OtherSection title="Moves" others={props.pokemon.moves} />
      </Main>
    </Container>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const res = await client.query({
      query: GET_POKEMON_DETAIL,
      variables: {
        name: params.name
      }
    });

    return {
      props: {
        pokemon: res.data.pokemon
      }
    };
  } catch (err) {
    return {
      notFound: true
    }
  }
}
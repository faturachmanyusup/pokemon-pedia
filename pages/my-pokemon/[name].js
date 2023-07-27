import { GET_POKEMON_DETAIL } from 'gpql/query';
import { css } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import { Context } from 'store';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { PageLoader } from 'components/loader';
import { Container } from 'components/container';
import { Button } from 'components/button';
import {
  BaseStatus,
  OtherSection,
  PokemonName
} from 'components/section/SectionDetail';
import { Side, Main } from 'components/layout';
import { Preview } from 'components/image';
import { SEO } from 'components/seo';

import { capitalize } from 'helpers/letter';

const Modal = dynamic(() =>
  import('components/modal').then(mod => mod.Modal)
);

export default function PokemonDetail(props) {
  const { getPokemon, removePokemon } = useContext(Context);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [queryGetPokemon] = useLazyQuery(GET_POKEMON_DETAIL);
  const [showModal, setShowModal] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [wasReleased, setWasReleased] = useState(false);

  const [overallStat, setOverallStat] = useState(0);

  useEffect(() => {
    getPokemon(props.name)
      .then(localPokemon => {
        queryGetPokemon({
          variables: { name: localPokemon.name },
          onCompleted: (res) => {
            let sumPoints = 0;
            let countStats = 0;

            res.pokemon.stats.map(stat => {
              sumPoints += stat.base_stat;
              countStats += 1;
            })

            setPokemon(res.pokemon);
            setOverallStat(Math.floor(sumPoints / countStats));
            setLoading(false);
          },
          onError: (err) => { throw err }
        })
      })
      .catch(err => {
        if (err.message === 'CANNOT FIND POKEMON') {
          router.push('/404');
          return;
        }

        router.push('500');
      })
  }, [])

  const onClickRelease = () => {
    removePokemon(props.name);
    setShowModal(false);
    setShowNotif(true);
    setWasReleased(true);
  }

  return (
    <Container display='flex' direction={['column', 'column', 'row']} gap='0 5rem'>
      <SEO
        title={`Pokemon Pedia - ${capitalize(props.name)}`}
        description={`${props.name} Detail`}
        path={`/my-pokemon/${props.name}`}
      />
      {loading
        ? <PageLoader />
        : (
          <>
            <Side>
              <Preview images={Object.values(pokemon.sprites)} />
              <Button
                type='button'
                css={css({
                  color: '#ffffff',
                  backgroundColor: '#D02806',
                })}
                onClick={() => setShowModal(true)}
                disabled={wasReleased}
              >
                {wasReleased ? `${props.name} was released` : 'Release'}
              </Button>
            </Side>
            <Main css={{ gap: '1rem 0' }}>
              <PokemonName
                name={`${props.name} (${pokemon.name})`}
                overallStat={overallStat}
                types={pokemon.types}
              />
              <BaseStatus stats={pokemon.stats} />
              <OtherSection title="Abilities" others={pokemon.abilities} />
              <OtherSection title="Moves" others={pokemon.moves} />
            </Main>
          </>
        )
      }

      {showModal && (
        <Modal onClickBackdrop={() => setShowModal(false)}>
          <h2>Warning!</h2>
          <p>
            Are you sure want to release <strong className='capitalize'>{props.name}</strong> ?
          </p>
          <div css={css({ display: 'flex', justifyContent: 'flex-end', gap: '.5rem' })}>
            <Button
              css={{
                margin: '.5rem 0 0',
                padding: '.1rem 1rem',
                backgroundColor: '#D02806',
                color: '#ffffff',
              }}
              onClick={() => onClickRelease()}
            >
              Release
            </Button>
            <Button
              css={{
                margin: '.5rem 0 0',
                padding: '.1rem 1rem',
              }}
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      )}

      {showNotif && (
        <Modal onClickBackdrop={() => setShowNotif(false)}>
          <h2>Success</h2>
          <p><strong className='capitalize'>{props.name}</strong> was released.</p>
          <div css={css({ display: 'flex', justifyContent: 'flex-end', gap: '.5rem' })}>
            <Button
              css={{
                margin: '.5rem 0 0',
                padding: '.1rem 1rem',
              }}
              onClick={() => setShowNotif(false)}
            >
              Oke
            </Button>
          </div>
        </Modal>
      )}
    </Container>
  )
}

export function getServerSideProps({ params }) {
  return {
    props: {
      name: params.name
    }
  };
}
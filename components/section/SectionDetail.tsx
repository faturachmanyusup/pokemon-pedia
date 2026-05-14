import { Section, SectionTitle } from 'components/section';
import { RoundedMedium } from 'components/label';
import { mq } from 'styles/emotion';
import { mapTypeColor } from 'styles/variable';
import { css } from '@emotion/react';
import { PokemonType, PokemonStat, PokemonAbility, PokemonMove } from 'types/pokemon';

interface PokemonNameProps {
  name: string;
  overallStat: number;
  types: PokemonType[];
}

export const PokemonName = (props: PokemonNameProps): JSX.Element => {
  return (
    <Section data-testid="pokemon-section">
      <div className='flex-row justify-content-between' css={mq({ marginTop: ['1rem', '1rem', '0'] })}>
        <h1 className="capitalize">{props.name}</h1>
        <h1 className='text-normal'>{props.overallStat}</h1>
      </div>
      <div className='w-100 flex-row' css={mq({ gap: '.8rem', margin: '.5rem 0 1rem' })}>
        {props.types.map((type, idx) => (
          <RoundedMedium
            key={idx}
            css={{
              color: '#ffffff',
              backgroundColor: mapTypeColor[type.type?.name || 'default'],
              lineHeight: '1.7rem',
              padding: '0 1rem',
              fontSize: '12px',
              textTransform: 'capitalize'
            }}
          >
            {type.type.name}
          </RoundedMedium>
        ))}
      </div>
    </Section>
  );
};

interface BaseStatusProps {
  stats: PokemonStat[];
}

export const BaseStatus = (props: BaseStatusProps): JSX.Element => {
  return (
    <Section data-testid="base-status-section">
      <SectionTitle>Base Status</SectionTitle>
      <div
        css={mq({
          display: 'grid',
          gridTemplate: ['auto / auto auto'],
          gap: [
            '.5rem 2rem',
            '.5rem 2rem',
            '.5rem 4rem'
          ]
        })}>
        {props.stats.map((stat, idx) => (
          <div key={idx} className="flex-row justify-content-between">
            <h4 className='text-normal capitalize'>
              {stat.stat.name.split('-').map(text => `${text} `)}
            </h4>
            <h4 className='text-normal'>{stat.base_stat}</h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

interface OtherSectionProps {
  title: string;
  others: PokemonAbility[] | PokemonMove[];
}

export const OtherSection = (props: OtherSectionProps): JSX.Element => {
  return (
    <Section css={css({ margin: '1rem 0' })}>
      <SectionTitle css={{ margin: '1rem 0' }}>{props.title}</SectionTitle>
      <div
        css={mq({
          display: 'grid',
          gridTemplate: [
            'auto / 40% 40%',
            'auto / 25% 25% 25%',
            'auto / 25% 25% 25%',
            'auto / 20% 20% 20% 20%',
          ],
          gap: '.5rem 4rem',
        })}
      >
        {props.others.map((other, idx) => {
          const key = Object.keys(other)[0] as keyof typeof other;

          return (
            <h4 key={idx} className='text-normal capitalize'>
              {other[key]?.name.split('-').map(name => `${name} `)}
            </h4>
          );
        })}
      </div>
    </Section>
  );
};

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { mq } from "../../styles/emotion";
import { RoundedFull } from 'components/label';
import { forwardRef } from "react";

export const Card = styled.div(props => ({
  borderRadius: '5px',
  height: '100%',
  boxShadow: '0 0 3.5px 1px rgb(0, 0, 0, 0.15)',
  ...props.css
}))

export const PokemonCard = forwardRef((props, ref) => {
  return (
    <a lang="en" href={props.href} ref={ref} data-testid="pokemon-card">
      <Card
        css={mq({
          padding: '1rem',
          height: '100%',
          width: '100%',
          maxWidth: ['100%', '13rem', '13rem'],
          textAlign: 'center',
          '&:hover': css({ cursor: 'pointer' }),
          ...props.css
        })}
      >
        <RoundedFull
          css={{
            backgroundColor: '#4123D7',
            position: 'absolute',
            zIndex: '2',
            lineHeight: '2rem',
            width: '2rem',
            color: 'white',
            position: 'absolute',
            zIndex: 2,
            float: 'left'
          }}
        >
          {props.id}
        </RoundedFull>
        <Image
          src={props.img}
          width={160}
          height={160}
          alt={props.labelLeft}
          layout="fixed"
          objectFit="contain"
        />
        <div
          css={mq({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: ['5rem', '5rem', '4rem']
          })}
        >
          <h3 css={mq({ textTransform: 'capitalize', fontSize: [24, 24, 16] })} data-testid="card-id">
            {props.labelLeft}
          </h3>
          <span>{props.labelRight}</span>
        </div>
      </Card>
    </a>
  )
})
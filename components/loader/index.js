/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Container } from "components/container";

const bounce = keyframes`
  from, 40%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  20%, 60% {
    transform: translate3d(0, -20px, 0);
  }
`;

export function PageLoader() {
  return (
    <Container dataTestId="page-loader">
      <div
        css={css({
          margin: 'auto auto',
          height: '100vh',
          textAlign: 'center',
          animation: 'ease-in-out 1000ms infinite'
        })}
        id="page-loader"
      >
        <Image
          css={css({ animation: `${bounce} 1s ease infinite` })}
          src="/assets/images/pokeball.png"
          alt="loading"
          width={260}
          height={240}
          quality={100}
          priority={true}
        />
        <h2>Wait a second ...</h2>
      </div>
    </Container>
  )
}

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Bar = styled.div({
  height: '20px',
  background: '#777',
  marginBottom: '.3rem',
  animation: `${shimmer} 2s infinite`,
  background: 'linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)',
  backgroundSize: '1000px 100%',
  borderRadius: '5px'
});

export function Shimmer({ length = 3 }) {
  return (
    <div data-testid="shimmer">
      <Bar />
      {new Array(length).fill(0).map((_, idx) => (
        <Bar key={idx} />
      ))}
    </div>
  );
}

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div(props => ({
  border: '.8rem solid #ffffff',
  borderTop: '.8rem solid #EE4240',
  borderRight: '.8rem solid #EE4240',
  borderRadius: '50%',
  width: '1rem',
  height: '1rem',
  margin: '.2rem',
  'WebkitAnimation': `${spinner} 2s linear infinite`,
  animation: `${spinner} 2s linear infinite`,
  ...props.css
}));


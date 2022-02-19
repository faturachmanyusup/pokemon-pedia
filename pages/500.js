import { css } from "@emotion/react";
import { Container } from "../components/container";

export default function Custom500() {
  return (
    <Container>
      <h1
        css={css({
          textAlign: 'center',
          margin: '8rem 0'
        })}
      >
        Oopps.. <br />Something went wrong!
      </h1>
    </Container>
  )
}
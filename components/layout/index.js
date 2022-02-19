import styled from "@emotion/styled";

export const Side = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  ...props.css
}))

export const Main = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  ...props.css
}))
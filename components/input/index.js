import styled from "@emotion/styled";

export const Input = styled.input(props => ({
  width: '100%',
  height: '2rem',
  borderRadius: '5px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  paddingLeft: '.5rem',
  ...props.css
}))
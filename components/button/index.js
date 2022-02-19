import styled from "@emotion/styled";

export const Button = styled.button(props => ({
  border: 'none',
  padding: '0 3rem',
  lineHeight: '2rem',
  borderRadius: '8px',
  margin: '1rem 0',
  ':disabled': {
    filter: 'contrast(80%)',
    cursor: 'not-allowed'
  },
  ...props.css
}))
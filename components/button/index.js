import styled from "@emotion/styled";

export const Button = styled.button(props => ({
  border: 'none',
  padding: '0 3rem',
  lineHeight: '2rem',
  borderRadius: '8px',
  margin: '1rem 0',
  cursor: 'pointer',
  ':disabled': {
    filter: 'contrast(80%)',
    cursor: 'default'
  },
  ...props.css
}))
import styled from '@emotion/styled';

interface ButtonProps {
  css?: Record<string, any>;
}

export const Button = styled.button<ButtonProps>((props) => ({
  border: 'none',
  padding: '0 3rem',
  lineHeight: '2rem',
  borderRadius: '8px',
  margin: '1rem 0',
  cursor: 'pointer',
  ':disabled': { filter: 'contrast(80%)', cursor: 'default' },
  ...props.css
}));

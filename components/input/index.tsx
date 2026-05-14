import styled from '@emotion/styled';

interface InputProps {
  css?: Record<string, any>;
}

export const Input = styled.input<InputProps>((props) => ({
  width: '100%',
  height: '2rem',
  borderRadius: '5px',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  paddingLeft: '.5rem',
  ...props.css
}));

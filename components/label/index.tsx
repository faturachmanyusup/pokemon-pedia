import styled from '@emotion/styled';

interface LabelProps {
  css?: Record<string, any>;
}

export const RoundedFull = styled.div<LabelProps>((props) => ({
  borderRadius: '50%',
  width: '2rem',
  lineHeight: '2rem',
  ...props.css
}));

export const RoundedMedium = styled.div<LabelProps>((props) => ({
  borderRadius: '50px',
  lineHeight: '2rem',
  ...props.css
}));

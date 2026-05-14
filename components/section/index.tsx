import styled from '@emotion/styled';

interface SectionProps {
  css?: Record<string, any>;
}

export const Section = styled.section<SectionProps>((props) => ({
  ...props.css
}));

export const SectionTitle = styled.h2<SectionProps>((props) => ({
  borderBottom: '2px solid #000000',
  width: 'fit-content',
  fontSize: '18px',
  margin: '1rem 0',
  ...props.css
}));

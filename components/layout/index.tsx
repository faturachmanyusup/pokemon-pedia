import styled from '@emotion/styled';

interface LayoutProps {
  css?: Record<string, any>;
}

export const Side = styled.div<LayoutProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  ...props.css
}));

export const Main = styled.div<LayoutProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  ...props.css
}));

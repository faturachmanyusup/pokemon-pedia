import styled from "@emotion/styled";

export const Section = styled.section(props => ({
  ...props.css
}))

export const SectionTitle = styled.h2(props => ({
  borderBottom: '2px solid #000000',
  width: 'fit-content',
  fontSize: '18px',
  margin: '1rem 0',
  ...props.css
}))
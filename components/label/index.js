import styled from "@emotion/styled"

export const RoundedFull = styled.div(props => ({
  borderRadius: '50%',
  width: '2rem',
  lineHeight: '2rem',
  ...props.css
}))

export const RoundedMedium = styled.div(props => ({
  borderRadius: '50px',
  lineHeight: '2rem',
  ...props.css
}))
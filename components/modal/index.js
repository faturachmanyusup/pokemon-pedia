import styled from "@emotion/styled";

const Backdrop = styled.div(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 50,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  backdropFilter: 'blur(2px)',
  maxWidth: '100%',
  margin: '0 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...props.css
}))

const Content = styled.div(props => ({
  margin: '-10rem 0 0',
  backgroundColor: '#ffffff',
  border: '2px solid rgba(0, 0, 0, .4)',
  padding: '1rem 1rem',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  boxShadow: '0 0 3.5px 1px rgb(0, 0, 0, 0.15)',
  minWidth: '20rem',
  ...props.css
}))

export const Modal = (props) => {
  const handleClick = (e) => {
    if(e.target.id !== 'modal-backddrop') return;

    props.onClickBackdrop();
  }

  return (
    <Backdrop id="modal-backddrop" onClick={handleClick}>
      <Content>
        {props.children}
      </Content>
    </Backdrop >
  )
}
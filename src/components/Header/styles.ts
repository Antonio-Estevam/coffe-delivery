import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin: 2rem 0;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconContainer = styled.div`
  width: 40px;
`
export const ActionBase = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
`
export const ActionContainer = styled.div`
  display: flex;
  gap: 1rem;
`
export const CurrentLocation = styled(ActionBase)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  gap: 0.2rem;
  span {
    font-family: 'Roboto';
    font-size: 1rem;
    justify-self: center;
  }
`
export const CartLinkContainer = styled(ActionBase)`
  background: ${(props) => props.theme['yellow-light']};
  position: relative;
  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '3';
    padding: 1px 1px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    font-size: 10px;
    position: absolute;
    right: -5px;
    top: -5px;
  }
  a {
    color: ${(props) => props.theme.yellow};
  }
`

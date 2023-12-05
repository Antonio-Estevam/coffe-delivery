import styled from 'styled-components'

export const HomeContainer = styled.main`
  > img {
    position: absolute;
    background-size: cover;
    width: 100%;
    left: 0;
    top: 0;
    height: 560px;
    z-index: 1;
  }
`
export const BannerHome = styled.section`
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 2.5rem 0;
  margin-bottom: 6.07rem;

  .left {
    max-width: 50%;
  }

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
    line-height: 3.5rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemsGroup = styled.div`
  margin-top: 3.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    &:first-child svg {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
    &:nth-child(n + 2) svg {
      background-color: ${(props) => props.theme['base-text']};
    }
    &:nth-child(n + 3) svg {
      background-color: ${(props) => props.theme.yellow};
    }
    &:nth-child(-n + 2) {
      margin-bottom: 20px;
    }
    &:last-child svg {
      background-color: ${(props) => props.theme.purple};
    }
    svg {
      padding: 8px;
      color: ${(props) => props.theme.white};
      border-radius: 50%;
    }
  }
`
export const CoffeeList = styled.article`
  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1.5rem;
  }
`

export const List = styled.div`
  margin: 3.7rem 0 4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

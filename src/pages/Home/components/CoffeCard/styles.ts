import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 20.38rem;
  border-radius: 0px 40px 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.2rem;
  box-sizing: border-box;
  margin-bottom: 3rem;

  img {
    width: 7.5rem;
    margin-top: -1rem;
  }
  .coffeTypeGroup {
    display: flex;
    gap: 10px;
  }

  .coffeType {
    margin: 1rem 0 1.2rem 0;
    text-transform: uppercase;
    font-size: 0.63rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 5px 10px;
    border-radius: 10px;
  }

  > h3 {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.75rem;
  }
  > .description {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }
`
export const Buy = styled.div`
  display: flex;
  margin-bottom: 1rem;
  .price {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
  input {
    max-width: 45px;
    margin: 0 15px 0 10px;
  }
`

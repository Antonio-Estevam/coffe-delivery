import styled from 'styled-components'

export const Thumbnail = styled.img`
  width: 7.5rem;
  margin-top: -1rem;
`

export const CoffeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  height: 20.38rem;
  border-radius: 0px 40px 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 3rem;

  .coffeTypeGroup {
    display: flex;
    gap: 5px;
  }

  .coffeType {
    margin: 1rem 0 1.2rem 0;
    text-transform: uppercase;
    font-size: 0.63rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    padding: 5px 5px;
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
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    > span {
      margin-left: 5px;
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  input {
    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    max-width: 2.8124rem;
    margin: 0 15px 0 10px;
    border: none;
    border-radius: 5px;
    padding-left: 4px;
    background: ${(props) => props.theme['base-button']};
  }
  > button {
    border: none;
    background: ${(props) => props.theme.purple};
    padding: 6px;
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    &:hover {
      background: ${(props) => props.theme['purple-dark']};
      transition: background 2s;
    }
  }
`

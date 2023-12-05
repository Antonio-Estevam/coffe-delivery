import styled from 'styled-components'

export const BaseCoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`

export const CoffeCard = styled(BaseCoffeeCard)``

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  form {
    display: flex;
    flex-direction: row;
    gap: 2.625rem;

    > div {
      h2 {
        font-size: 1.125rem;
        font-weight: 700;
        font-family: 'Baloo 2', sans-serif;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 1.31rem;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.875rem;
          h3 {
            color: ${(props) => props.theme['base-subtitle']};
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
          }
          p {
            font-weight: 400;
          }
        }
      }
    }
  }
`
export const PayMethod = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  input:checked + label {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    color: ${(props) => props.theme.purple};
  }
  input {
    display: none;
  }
  label {
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    gap: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
export const InputsAddressGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    border: none;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }

    &:first-child {
      width: 40%;
    }
  }

  > div {
    display: flex;
    gap: 2%;
    justify-content: space-between;
    > input:last-child {
      width: 46%;
    }
  }

  div:last-child > input:last-child {
    width: 10%;
  }
`
export const CoffesList = styled.div`
  overflow: auto;
  height: 227px;
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    //background: ${(props) => props.theme['base-button']};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px; /* roundness of the scroll thumb */
    border: 3px solid ${(props) => props.theme['base-button']};
  }
`

export const Coffe = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-right: 1rem;

  &:not(:first-child) {
    margin-top: 2rem;
  }
  img {
    width: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 10px;
      font-size: 1rem;
    }
    div {
      display: flex;
      flex-direction: row;

      input {
        font-size: 1rem;
        color: ${(props) => props.theme['base-title']};
        max-width: 2.8124rem;
        margin: 0 15px 0 10px;
        border: none;
        border-radius: 5px;
        padding-left: 10px;

        background: ${(props) => props.theme['base-button']};
      }
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};
        border: none;
        padding: 7px 10px;
        border-radius: 4px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.75rem;
        &:hover {
          color: ${(props) => props.theme.purple};
          background: ${(props) => props.theme['purple-light']};
          transition:
            background,
            color 1s;
        }
      }
    }
  }
  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
    font-size: 1rem;
    margin-left: 1.75rem;
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.785rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;

    &:first-child {
      margin-top: 2rem;
    }

    &:nth-child(n + 3) {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
  }
  button {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 0;
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
      transition: background 1s;
    }
  }
`

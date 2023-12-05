import styled from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    margin-top: 2.5rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    justify-content: space-between;

    img {
      width: 30.75rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      padding: 2.875rem;
      border: 1px solid red;

      border-image: linear-gradient(
        to right,
        ${(props) => props.theme['yellow-dark']},
        ${(props) => props.theme.purple}
      );
      border-image-slice: 1;
      border-radius: 50px !important;
      box-sizing: border-box;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1.5rem;
        align-items: flex-start;
        line-height: 0.5rem;
        color: ${(props) => props.theme['base-textt']};
        font-size: 1rem;
        &:nth-child(n + 2) svg {
          background: ${(props) => props.theme.yellow};
        }
        &:last-child svg {
          background: ${(props) => props.theme['yellow-dark']};
        }
        svg {
          background: ${(props) => props.theme.purple};
          padding: 10px;
          border-radius: 550%;
          color: ${(props) => props.theme.white};
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
`

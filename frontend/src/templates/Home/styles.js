import styled, { css } from "styled-components";

export const WrapperHome = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3rem auto;

    h1 {
      margin: 1rem auto 2rem;
      font-size: 2rem;
      text-align: center;
    }
    button {
      width: 32%;
      margin: 1.5rem;
    }

    @media (max-width: 768px) {
      margin: 3rem 2rem;
      h1 {
        margin: 1rem auto 2rem;
        font-size: 1.5rem;
      }
      button {
        width: 50%;
      }
    }
  `}
`;

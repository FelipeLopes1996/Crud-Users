import styled, { css } from "styled-components";

export const WrapperHome = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0 0 0;
    background-image: linear-gradient(130deg, #6c757d, #2b3940 50%);
    height: 100vh;

    h1 {
      margin: 1rem auto 2rem;
      font-size: 2rem;
      text-align: center;
      color: ${theme.bg.veryLightGray};
    }
    button {
      width: 32%;
      margin: 1.5rem;
    }

    @media (max-width: 768px) {
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

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
    }
    button {
      width: 32%;
      margin: 1.5rem;
    }
  `}
`;

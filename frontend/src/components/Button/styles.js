import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    text-align: center;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${theme.bg.white};
    box-shadow: 0 0 1rem #ccc;
    transition: ease-in-out 500ms;
    svg {
      font-size: 1.6rem;
    }

    &:hover {
      box-shadow: 0 0 3rem #ccc;
    }
  `}
`;

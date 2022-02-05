import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    text-align: center;
    border: none;
    border-radius: 5px;
    background-color: ${theme.bg.secondary};
    color: ${theme.bg.white};
    margin: 1rem 0.6rem 0.8rem 0;
    padding: 0.3rem 0.6rem;
    transition: ease-in-out 500ms;

    &:hover {
      background-color: ${theme.bg.darkBlue};
    }
  `}
`;

import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    border-bottom: 4px solid ${theme.bg.veryLightGray};
    background-color: ${theme.bg.white};
    span {
      display: flex;
      align-items: center;
      color: ${theme.bg.veryDarkBlue};
      font-weight: 700;

      svg {
        cursor: pointer;
        margin-right: 1rem;
        font-size: 1.7rem;
      }
    }
    button {
      cursor: pointer;
      text-align: center;
      border: none;
      padding: 0.4rem 2rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      background-color: ${theme.bg.white};
      box-shadow: 0 0 1rem #ccc;
      transition: ease-in-out 500ms;
      margin-right: 1rem;
      svg {
        font-size: 1.6rem;
      }

      &:hover {
        box-shadow: 0 0 3rem #ccc;
      }
    }
  `}
`;

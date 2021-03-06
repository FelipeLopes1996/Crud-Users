import styled, { css } from "styled-components";

export const WrapperButton = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 10%;
    padding: 2rem 0 0 2rem;
  `}
`;

export const WrapperLogin = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;

    h1 {
      margin: 2rem auto;
      font-size: 2rem;
    }
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 50rem;
    padding: 4rem 7rem;
    box-shadow: 0 0 0.8rem ${theme.bg.darkBlue};
    border-radius: 8px;

    label {
      font-weight: 600;
    }

    input {
      width: 100%;
      border: none;
      border: 1px solid ${theme.bg.veryLightGray};
      border-radius: 6px;
      outline: none;
      padding: 0.6rem 2rem;
      transition: ease-in-out 400ms;
      box-shadow: 0 0 0.1rem #ccc;
      margin: 0.7rem 0;
      &:hover {
        box-shadow: 0 0 2rem #ccc;
      }
      &:focus {
        box-shadow: 0 0 1rem #ccc;
      }
    }
    button {
      cursor: pointer;
      width: 100%;
      margin: 1rem auto;
      padding: 0.5rem 0;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      background-color: ${theme.bg.white};
      transition: ease-in-out 500ms;
      box-shadow: 0 0 0.2rem #ccc;

      &:hover {
        box-shadow: 0 0 1rem #ccc;
      }
    }
    a {
      text-decoration: none;
      color: ${theme.bg.darkBlue};
      font-weight: 600;
      transition: ease-in-out 400ms;
      text-align: center;

      &:hover {
        color: ${theme.bg.secondary};
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem 3rem;
    }
  `}
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .open {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1055;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      overflow-x: hidden;
      overflow-y: auto;
      outline: 0;
      font-size: 30px;
    }
    .show {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      width: 30rem;
      height: 20rem;
      z-index: 2;
      border: 0.3rem solid ${theme.bg.secondary};
      border-radius: 8px;
      text-align: center;
      padding: 1rem;
      transition: transform 0.3s ease-out;
      pointer-events: auto;
      div {
        margin: 1.5rem 0;
        span {
          color: ${theme.bg.secondary};
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
    .close {
      display: none;
    }
  `}
`;

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      width: 10rem;
      font-weight: 600;
      border: none;
      outline: none;
      border-radius: 0.5rem;
      background-color: ${theme.bg.darkBlue};
      color: ${theme.bg.white};
      padding: 1rem 0;
      font-size: 1rem;
      text-align: center;
      cursor: pointer;
      transition: ease-in-out 400ms;
      &:hover {
        color: ${theme.bg.danger};
      }
    }
  `}
`;

export const A = styled.a`
  ${({ theme }) => css`
    width: 10rem;
    font-weight: 600;
    border: none;
    outline: none;
    border: 0.2rem solid ${theme.bg.info}
    color: ${theme.bg.secondary};
    font-size: 1rem 0;
    text-align: center;
    cursor: pointer;
    transition: ease-in-out 400ms;
    &:hover {
      color: ${theme.bg.danger};
    }
  `}
`;

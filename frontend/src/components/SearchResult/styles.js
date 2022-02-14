import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  z-index: 1;
`;

export const WrapperExportButtons = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    a {
      width: 100%;
    }
  }
`;
export const WrapperTable = styled.section`
  width: 100%;
  padding: 2rem 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
    .scroll {
      width: 100%;
      overflow-x: scroll;
      overflow-y: unset;
      justify-content: flex-start;
      ::-webkit-scrollbar {
        width: 2px;
        height: 12px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height: 200px;
        border: 3px solid #ffffff;
        background-color: #2c3e50;
      }
    }
  }

  .users-found {
    width: 100%;
    text-align: start;
    margin-bottom: 0.7rem;
    font-weight: 600;
    span {
      border-bottom: 1px solid #ccc;
    }
  }
  h1 {
    font-size: 1.5rem;
  }

  .btn-delete-all {
    cursor: pointer;
    text-align: center;
    border: none;
    padding: 0.3rem 1rem;
    margin: 1rem 0;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${(props) => props.theme.bg.white};
    box-shadow: 0 0 1rem #ccc;
    transition: ease-in-out 500ms;

    &:hover {
      background-color: ${(props) => props.theme.bg.darkBlue};
      color: ${(props) => props.theme.bg.white};
    }
  }
`;

export const WrapperInputText = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  input {
    width: 50%;
    border: none;
    border: 1px solid ${(props) => props.theme.bg.veryLightGray};
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
  svg {
    font-size: 2rem;
    margin-left: 1rem;
  }
  select {
    width: 50%;
    border: none;
    border: 1px solid ${(props) => props.theme.bg.veryLightGray};
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

  @media (max-width: 768px) {
    width: 100;
    justify-content: center !important;
  }
`;

export const ButtonGenerate = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  border: none;
  padding: 0.7rem 1rem;
  margin: 0 1rem 1rem 0;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.bg.white};
  box-shadow: 0 0 1rem #ccc;
  transition: ease-in-out 500ms;

  &:hover {
    box-shadow: 0 0 3rem #ccc;
  }
  svg {
    font-size: 1.3rem;
    color: ${(props) => props.theme.bg.danger};
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 1rem 0;
    text-align: center;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
`;

export const TableHeader = styled.thead`
  th {
    background-color: ${(props) => props.theme.bg.darkBlue};
    color: ${(props) => props.theme.bg.white};
  }
  tr,
  th {
    padding: 0.4rem;
    text-align: center;
  }
`;

export const TableBody = styled.tbody`
  tr,
  td {
    transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  }
  td {
    text-align: center;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;

    select {
      border: none;
      border: 1px solid ${(props) => props.theme.bg.veryLightGray};
      border-radius: 6px;
      outline: none;
      padding: 0.3rem 0.8rem;
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
  }
  tr {
    &:hover {
      background-color: ${(props) => props.theme.bg.darkBlue};
      color: ${(props) => props.theme.bg.white};

      svg {
        color: ${(props) => props.theme.bg.white};
      }
    }
    &:nth-child(even) {
      background-color: ${(props) => props.theme.bg.secondary};
      &:hover {
        background-color: ${(props) => props.theme.bg.darkBlue};
        color: ${(props) => props.theme.bg.white};
      }
    }
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td``;

export const Th = styled.th``;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Link = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.bg.info};
  }
  }
`;

export const BtnDestroy = styled.button`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      color: ${theme.bg.danger};
      font-size: 1rem;
    }
  `}
`;

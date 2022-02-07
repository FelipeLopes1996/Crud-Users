import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const WrapperTable = styled.section`
  padding: 2rem 7rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    div {
      width: 100%;
      overflow-x: unset;
      overflow-y: scroll;
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

export const ButtonGenerate = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
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

export const BtnDestroy = styled.span`
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

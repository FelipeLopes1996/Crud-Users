import styled from "styled-components";

export const WrapperFilters = styled.aside`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 20%;
  height: 90vh;
  background-color: ${(props) => props.theme.secondary};
  border-right: 2px solid ${(props) => props.theme.darkBlue};
  padding: 0 1rem;

  button {
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
  }

  .active {
    background-color: ${(props) => props.theme.bg.darkBlue};
    color: ${(props) => props.theme.bg.white};
  }
  .inative {
    background-color: #ccc;
  }
`;

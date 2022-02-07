import styled from "styled-components";

export const WrapperFilters = styled.aside`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 15%;
  height: 93vh;
  background-color: ${(props) => props.theme.secondary};
  border-right: 2px solid ${(props) => props.theme.darkBlue};
  padding: 0 1rem;

  h1 {
    color: ${(props) => props.theme.bg.white};

    margin-top: 1rem;
  }

  button {
    cursor: pointer;
    text-align: center;
    border: none;
    padding: 0.3rem 0.5rem;
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

  @media (max-width: 768px) {
    position: absolute;
    display: ${(props) => (props.Open ? "flex" : "none")};
    background-color: ${(props) => props.theme.bg.darkBlue};
    z-index: 2;
    width: 35%;
    border-radius: 0 9px 9px 0;
  }
`;

export const OpenAsside = styled.button`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 25rem;
    display: ${(props) => (props.Open ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    border-radius: 0 9px 9px 0;
    border: none;
    background-color: ${(props) => props.theme.bg.darkBlue};
    color: ${(props) => props.theme.bg.white};
    svg {
      color: ${(props) => props.theme.bg.white};
    }
  }
`;

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
    transition: all 600ms ease-in-out;
  }
  .hide {
    display: none;
  }

  .active {
    background-color: ${(props) => props.theme.bg.darkBlue};
    color: ${(props) => props.theme.bg.white};
  }
  .inative {
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    position: fixed;
    width: ${(props) => (props.Open ? "35%" : "0")};
    padding: ${(props) => (props.Open ? "1rem" : "0")};
    background-color: ${(props) => props.theme.bg.darkBlue};
    z-index: 2;
    border-radius: 0 9px 9px 0;
    transition: all 200ms ease-in-out;
    border: none;

    button {
      display: ${(props) => !props.Open && "none"};
    }
    h1 {
      display: ${(props) => !props.Open && "none"};
    }
  }
`;

export const OpenAsside = styled.button`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 25rem;
    display: flex;
    display: ${(props) => (props.Open ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    border-radius: 0 9px 9px 0;
    border: none;
    background-color: ${(props) => props.theme.bg.darkBlue};
    color: ${(props) => props.theme.bg.white};
    transition: all 300ms ease-in-out;
    svg {
      color: ${(props) => props.theme.bg.white};
    }
  }
`;

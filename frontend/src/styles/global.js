import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans';
    font-size: 14px;
    
  }

a, button {
  &, &:focus, &:active { outline: 'none'}
}
a {
  text-decoration: none;
}

body {
  font-size: 1rem;
  font-family: 'sans-serif';
    background-color: ${({ theme }) => theme.bg.veryLightGray};
}
`;

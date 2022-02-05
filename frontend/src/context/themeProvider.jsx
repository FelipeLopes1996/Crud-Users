import React from "react";

import { ThemeProvider } from "styled-components";

import themes from "../styles/themes";

export const ThemeContext = React.createContext([]);

const Provider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Provider;

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import GlobalStyles from "./styles/global";
import ThemeProvider from "./context/themeProvider";
import AuthProvider from "./context/auth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

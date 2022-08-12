import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./Utils/usePersistedState";

import light from "./Styles/Themes/light";
import dark from "./Styles/Themes/dark";

import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;

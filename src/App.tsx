import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./Utils/usePersistedState";
import { createTheme, ThemeProvider as Theme } from "@mui/material/styles";
import { ptBR } from "@material-ui/core/locale";

import light from "./Styles/Themes/light";
import dark from "./Styles/Themes/dark";

import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";
import SingIn from "./Pages/SingIn";
import SingOut from "./Pages/SingOut";
import Home from "./Pages/Home";
import Emprestar from "./Pages/Emprestar";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const themeMUI = createTheme(
    {
      palette: {
        primary: {
          main: "#DB4681",
        },
        secondary: {
          main: "#49A1D7",
        },
        success: {
          main: "#85B86E",
        },
        error: {
          main: "#f17057",
        },
      },
      components: {
        MuiInputBase: {
          defaultProps: {
            color: "primary",
          },
        },
      },
    },
    ptBR
  );

  return (
    <Theme theme={themeMUI}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header toggleTheme={toggleTheme} />
          <Emprestar />
        </div>
      </ThemeProvider>
    </Theme>
  );
};

export default App;

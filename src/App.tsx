import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./Utils/usePersistedState";

import light from "./Styles/Themes/light";
import dark from "./Styles/Themes/dark";

import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";
import Routes from "./Routes";
import { useAuth } from "./Services/Validation/auth";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const { logged } = useAuth();

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {logged && <Header toggleTheme={toggleTheme} />}
      <Routes />
    </ThemeProvider>
  );
};

export default App;

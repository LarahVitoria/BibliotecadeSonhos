import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./Services/Validation/auth";
import { createTheme, ThemeProvider as Theme } from "@mui/material/styles";
import { ptBR } from "@material-ui/core/locale";


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
      warning:{
        main:"#F39C50",
      },
      error: {
        main: "#f17057",
      },
    },
  },
  ptBR
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme theme={themeMUI}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  </React.StrictMode>
);

import React, { createContext, useState, useContext } from "react";
import { toastfyError } from "../../Components/Toast";

import api from "../Api/api";

interface IAuthContext {
  logged: boolean;
  singIn(ra: number, senha: string): void;
  singOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: any) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@biblioteca:logged");
    return !!isLogged;
  });

  const singIn = async (ra: number, senhaUsuario: string) => {
    await api
      .get(`users?ra=${ra}&senha=${senhaUsuario}`)
      .then((response) => {
        response.data.map((item: { tipo: any; email: any; nome_completo: any; ra: any; }) => {
          localStorage.setItem("@InfoUser:tipo", `${item.tipo}`);
          localStorage.setItem("@InfoUser:email", `${item.email}`);
          localStorage.setItem("@InfoUser:nome", `${item.nome_completo}`);
          localStorage.setItem("@InfoUser:ra", `${item.ra}`);

        });
      })
      .catch(() => {
        toastfyError("Usuário não encontrado, tente novamente.");
      })
      .finally(() => {
        setLogged(true);
        localStorage.setItem("@biblioteca:logged", "true");
      });
  };

  const singOut = () => {
    setLogged(false);
    localStorage.removeItem("@biblioteca:logged");
    localStorage.removeItem("@InfoUser:tipo");
    window.location.replace("/");
  };
  return (
    <AuthContext.Provider value={{ logged, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };

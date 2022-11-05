import React, {
  createContext,
  useState,
  useContext,
} from 'react';
import { toastfyError } from '../../Components/Toast';

import api from '../Api/api';

interface IAuthContext {
  logged: boolean;
  singIn(loginEmail: string, senha: string): void;
  singOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: any) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@prado-dashboard:logged');
    return !!isLogged; 
  });

  const singIn = async (ra: number, senhaUsuario: string) => {

    await api.post('usuario/login', {
      ra: ra,
      senhaUsuario: senhaUsuario,
    }).then(async (res) => {
      await api.get(`usuario/buscarPorEmail?ra=${ra}`)
        .then(response => {
          localStorage.setItem('@InfoUser:type', `${response.data.idTipoUsuario}`);
        }).finally(() => {
          setLogged(true);
          localStorage.setItem('@prado-dashboard:logged', 'true');
        });
    }).catch(() => {
      toastfyError('Email ou senha incorretos, tente novamente');
    })
  }

  const singOut = () => {
    setLogged(false);
    localStorage.removeItem('@prado-dashboard:logged');
    localStorage.removeItem('@InfoUser:type');
    window.location.replace("/");
  }
  return (
    <AuthContext.Provider value={{ logged, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}
function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
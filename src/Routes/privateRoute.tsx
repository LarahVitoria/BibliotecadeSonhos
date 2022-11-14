import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Emprestar from "../Pages/Emprestar";
import Home from "../Pages/Home";
import Localizar from "../Pages/Localizar";
import light from "../Styles/Themes/light";
import dark from "../Styles/Themes/dark";
import usePersistedState from "../Utils/usePersistedState";
import { DefaultTheme } from "styled-components";
import RegisterUsers from "../Pages/Users/AddUsers";
import Users from "../Pages/Users";
import Books from "../Pages/Books";
import RegisterBooks from "../Pages/Books/AddBooks";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Localizar" element={<Localizar />} />
      <Route path="/Emprestar" element={<Emprestar />} />
      <Route path="/Livros" element={<Books />} />
      <Route path="/Usuarios" element={<Users />} />
      <Route path="/Cadastro_Livros" element={<RegisterBooks />} />
      <Route path="/Cadastro_Usuarios" element={<RegisterUsers />} />
    </Routes>
  );
}

export default PrivateRoutes;

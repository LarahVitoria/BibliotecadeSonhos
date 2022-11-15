import { Route, Routes } from "react-router-dom";
import Emprestar from "../Pages/Emprestar";
import Home from "../Pages/Home";
import Localizar from "../Pages/Localizar";
import RegisterUsers from "../Pages/Users/AddUsers";
import Users from "../Pages/Users";
import Books from "../Pages/Books";
import RegisterBooks from "../Pages/Books/AddBooks";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/localizar" element={<Localizar />} />
      <Route path="/emprestar" element={<Emprestar />} />
      <Route path="/livros" element={<Books />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/cadastroLivros" element={<RegisterBooks />} />
      <Route path="/cadastroUsuarios" element={<RegisterUsers />} />
    </Routes>
  );
}

export default PrivateRoutes;

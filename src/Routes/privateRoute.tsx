import { Route, Routes } from "react-router-dom";
import SingIn from "../Pages/SingIn";
import SingOut from "../Pages/SingOut";

function PrivateRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/Cadastrar" element={<SingOut />} />
    </Routes>
  );
}

export default PrivateRoutes;

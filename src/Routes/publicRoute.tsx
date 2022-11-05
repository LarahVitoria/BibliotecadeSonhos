import { Routes as Switch, Route } from "react-router-dom";
import Emprestar from "../Pages/Emprestar";
import Home from "../Pages/Home";
import Localizar from "../Pages/Localizar";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/Localizar" element={<Localizar />} />
      <Route path="/Emprestar" element={<Emprestar />} />
    </Switch>
  );
}

export default Routes;

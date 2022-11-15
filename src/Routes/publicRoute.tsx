import { Routes as Switch, Route } from "react-router-dom";
import SingIn from "../Pages/SingIn";
import SingOut from "../Pages/SingOut";

function Routes() {
  return (
    <Switch>
          <Route path="/" element={<SingIn />} />
      <Route path="/cadastrar" element={<SingOut />} />
      
    </Switch>
  );
}

export default Routes;

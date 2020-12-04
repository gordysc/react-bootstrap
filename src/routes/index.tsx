import { Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import { LOGIN_ROUTE, PASSWORD_RESET_ROUTE, HOME_ROUTE } from "src/constants/routes";

import Login from "./Login";
import PasswordReset from "./PasswordReset";
import Home from "./Home";

const Routes = () => (
  <Switch>
    <PublicRoute path={LOGIN_ROUTE} component={Login} />
    <PublicRoute path={PASSWORD_RESET_ROUTE} component={PasswordReset} />

    <ProtectedRoute path={HOME_ROUTE} component={Home} exact />
  </Switch>
);

export default Routes;

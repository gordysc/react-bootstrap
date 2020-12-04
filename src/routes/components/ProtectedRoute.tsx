import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { LOGIN_ROUTE } from "src/constants/routes";
import { AuthContext } from "src/modules/auth/auth.context";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const uid = useContext(AuthContext);
  const isAuthenticatd = !!uid;

  return (
    <Route
      {...rest}
      render={props => (isAuthenticatd ? <Component {...props} /> : <Redirect to={LOGIN_ROUTE} />)}
    />
  );
};

export default ProtectedRoute;

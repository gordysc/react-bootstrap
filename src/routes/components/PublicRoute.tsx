import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME_ROUTE } from "src/constants/routes";
import { AuthContext } from "src/modules/auth/auth.context";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  const uid = useContext(AuthContext);
  const isAuthenticatd = !!uid;

  return (
    <Route
      {...rest}
      render={props => (isAuthenticatd ? <Redirect to={HOME_ROUTE} /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;

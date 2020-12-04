import React from "react";
import NavLink from "react-bootstrap/NavLink";
import { Link, useLocation } from "react-router-dom";

export interface ActiveNavLinkProps {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
}

const ActiveNavLink: React.FC<ActiveNavLinkProps> = ({
  path,
  exact,
  children
}: ActiveNavLinkProps) => {
  const { pathname } = useLocation();
  const active = (exact && pathname === path) || (!exact && pathname.startsWith(path));

  return (
    <NavLink as={Link} to={path || ""} active={active}>
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;

import { useContext } from "react";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";

import { HOME_ROUTE } from "src/constants/routes";
import { AuthContext } from "src/modules/auth/auth.context";
import authService from "src/modules/auth/auth.service";

import ActiveNavLink from "./ActiveNavLink";
import IconText from "./IconText";

const Header = () => {
  const uid = useContext(AuthContext);
  const isAuthenticated = !!uid;

  const onLogout = async () => {
    await authService.logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        {isAuthenticated && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <ActiveNavLink path={HOME_ROUTE} exact>
                  <IconText icon={faHome} label="Home" />
                </ActiveNavLink>
              </Nav>
              <Nav>
                <Nav.Link onClick={() => onLogout()}>
                  <IconText icon={faSignOutAlt} label="Logout" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;

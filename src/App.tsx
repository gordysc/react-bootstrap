import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "src/components/Header";
import { AuthProvider } from "src/modules/auth/auth.context";
import Routes from "src/routes";

const App = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Container className="mt-4">
        <Routes />
      </Container>
    </Router>
  </AuthProvider>
);

export default App;

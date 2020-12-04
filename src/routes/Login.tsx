import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import SpinButton from "src/components/SpinButton";
import { PASSWORD_RESET_ROUTE } from "src/constants/routes";
import { Credentials } from "src/modules/auth/auth.interfaces";
import authService from "src/modules/auth/auth.service";

const Login = () => {
  const [spin, setSpin] = useState(false);
  const { control, handleSubmit } = useForm<Credentials>();

  const onSubmit = async (credentials: Credentials) => {
    setSpin(true);
    if (!(await authService.login(credentials))) {
      toast.warning("Invalid email or password");
      setSpin(false);
    }
  };

  return (
    <Row>
      <Col
        sm={{ offset: 1, span: 10 }}
        md={{ offset: 2, span: 8 }}
        lg={{ offset: 3, span: 6 }}
        xl={{ offset: 4, span: 4 }}
      >
        <h2 className="text-center">Welcome | Login</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              as={<Form.Control autoFocus type="email" />}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              as={<Form.Control type="password" />}
            />
            <Form.Text muted className="text-right pb-2">
              <Link to={PASSWORD_RESET_ROUTE}>Forgot Your Password?</Link>
            </Form.Text>
          </Form.Group>
          <SpinButton text="Login" spin={spin} type="submit" variant="primary" block />
        </Form>
      </Col>
    </Row>
  );
};

export default Login;

import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import SpinButton from "src/components/SpinButton";
import { LOGIN_ROUTE } from "src/constants/routes";
import authService from "src/modules/auth/auth.service";

const PasswordReset = () => {
  const [spin, setSpin] = useState(false);
  const { control, handleSubmit } = useForm<{ email: string }>();
  const history = useHistory();

  const onSubmit = async ({ email }: { email: string }) => {
    setSpin(true);
    await authService.sendPasswordResetEmail(email);
    history.push(LOGIN_ROUTE);
    setSpin(false);
  };

  return (
    <Row>
      <Col
        sm={{ offset: 1, span: 10 }}
        md={{ offset: 2, span: 8 }}
        lg={{ offset: 3, span: 6 }}
        xl={{ offset: 4, span: 4 }}
      >
        <h2 className="text-center">Password | Reset</h2>
        <hr />
        <div className="text-center pt-2 pb-4">
          Enter your email below and we&apos;ll send instructions of how to reset your password
        </div>
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
          <SpinButton text="Send Instructions" spin={spin} type="submit" variant="primary" block />
        </Form>
        <div className="mt-4 text-center">
          <Link to={LOGIN_ROUTE}>Go Back</Link>
        </div>
      </Col>
    </Row>
  );
};

export default PasswordReset;

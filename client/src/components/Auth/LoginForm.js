import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap';
import { login } from './authFunctions';

const LoginForm = (prop) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const credentials = {
      email,
      password,
    };

    const result = login(credentials, prop);
    if (!result) {
      setMessage('Invalid email/password combination.');
    } else {
      prop.history.push('/admin/index');
    }
  };

  return (
    <Card className="bg-secondary shadow border-0">
      <CardHeader className="bg-transparent pb-5">
        <div className="text-center text-muted mb-4">
          <small>Sign In</small>
        </div>
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <Form role="form">
          <FormGroup className="mb-3">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-lock-circle-open" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="password"
                placeholder="your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputGroup>
          </FormGroup>
          <div>
            {message ? (
              <span className="text-warning">{message}</span>
            ) : null}
          </div>
          <div className="text-center">
            <Button
              className="my-4"
              color="primary"
              type="button"
              onClick={() => handleLogin()}
            >
              Sign in
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;

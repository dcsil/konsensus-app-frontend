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
import { register } from './authFunctions';

const RegisterForm = (prop) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    const credentials = {
      firstName,
      lastName,
      email,
      password,
    };

    const result = register(credentials, prop);
    if (!result) {
      setMessage('Invalid email/password combination.');
    } else {
      prop.history.push('/auth/login');
    }
  };

  return (
    <Card className="bg-secondary shadow border-0">
      <CardHeader className="bg-transparent pb-5">
        <div className="text-center text-muted mb-4">
          <small>Sign Up</small>
        </div>
      </CardHeader>
      <CardBody className="px-lg-5 py-lg-5">
        <Form role="form">
          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-ni ni-circle-08" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="First Name"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-hat-3" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Last Name"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input-group-alternative mb-3">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="ni ni-email-83" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder="Email"
                type="email"
                autoComplete="new-email"
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
                placeholder="Password"
                type="password"
                autoComplete="new-password"
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
              onClick={() => handleRegister()}
            >
              Register
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
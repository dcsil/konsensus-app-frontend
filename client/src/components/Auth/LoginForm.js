import React from 'react';
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

class LoginForm extends React.Component {
  state = {
    signup: false,
    email: '',
    password: '',
    name: '',
    statusMsg: '',
  };

  handleLogin = (event) => {
    event.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password,
    };

    const result = login(credentials, this.props.app);
    result.then((a) => {
      if (!a) {
        this.setState({
          statusMsg: 'Invalid email/password combination.',
        });
      }
    });
  };

  render() {
    return (
      <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
          <div className="text-center text-muted mb-4">
            <small>Sign In</small>
          </div>
        </CardHeader>
        <CardBody className="px-lg-5 py-lg-5">
          <Form role="form" onSubmit={this.handleLogin}>
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
                    this.setState({ email: e.target.value });
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
                    this.setState({ password: e.target.value });
                  }}
                />
              </InputGroup>
            </FormGroup>
            {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
            <div className="text-center">
              <Button
                className="my-4"
                color="primary"
                type="button"
                onClick={this.handleLogin}
              >
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default LoginForm;

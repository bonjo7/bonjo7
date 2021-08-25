import React, { useState } from "react";
import UseRoutes from "../../Hooks/RoutesHook";
import Toast from "../Toast/Toast";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
import Breadcrumbs from "../Breadcrumb/Breadcrumbs";

const Login = () => {
  const [loginData, setLoginData] = useState();
  const { show, setShow, error, errorStatus, loading, loginUser } = UseRoutes();

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault(e);

    loginUser(loginData);
  };

  return (
    <>
      <Breadcrumbs currentPage='Login' />
      {error && (
        <Toast
          error={error}
          errorStatus={errorStatus}
          show={show}
          setShow={setShow}
        />
      )}
      <Jumbotron fluid role='main' id='landing-page'>
        {loading && <Spinner />}
          <Container>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type='text'
                  name='username'
                  placeholder='Enter email'
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={handleLogin} disabled={loading}>
                Submit
              </Button>
            </Form>
          </Container>
        
      </Jumbotron>
    </>
  );
};

export default Login;

import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/Logo1.png';
import './LoginScreen.css';

const LoginScreen = () => {
  return (
    <Container fluid className="login-screen d-flex align-items-center justify-content-center">
      <Card className="login-container shadow-sm p-4">
        <Card.Body>
        <Row className="text-center my-4 d-flex justify-content-center align-items-center ">
          <img src={Logo} alt="Logo" className="logo-img" />
          <h2 className="text-center my-1" >Log in</h2>
          </Row>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3 rounded-button">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginScreen;

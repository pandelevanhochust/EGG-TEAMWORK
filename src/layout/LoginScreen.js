import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import Link nếu bạn sử dụng React Router
import Logo from '../assets/Logo1.png';
import './LoginScreen.css';

const LoginScreen = () => {

  const navigate = useNavigate();

  return (
    <Container fluid className="login-screen d-flex align-items-center justify-content-center">
      <Card className="login-container shadow-sm p-4">
        <Card.Body>
          <Row className="text-center my-4 d-flex justify-content-center align-items-center ">
          <Link href ="/">
            <img src={Logo} alt="Logo" className="logo-img" onClick={navigate("/")} />
            </Link>
            <h2 className="text-center my-1">Log in</h2>
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

            {/* Forgotten Password */}
            <div className="text-center mt-3">
              <Link to="/forgot-password" className="text-decoration-none" style={{ color: "var(--button-color)" }}>
                Forgotten Password?
              </Link>
            </div>
            <hr></hr>
            {/* Create New Account */}
            <div className="text-center mt-3">
              <Link to="/register" className="text-decoration-none" style={{ color: "var(--button-color)" }}>
                Create New Account
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginScreen;

import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Logo from '../assets/Logo1.png';
import './LoginScreen.css';

const LoginScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="login-screen-wrapper" style={{ position: 'relative' }}>
      {/* Nút quay về homepage bên ngoài Container */}
      <Button
        variant="link"
        className="back-button"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '1.2rem',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          color: '#333',
        }}
      >
        <FaArrowLeft style={{ marginRight: '5px' }} />
        <span>Home</span>
      </Button>

      <Container fluid className="login-screen d-flex align-items-center justify-content-center">
        <Card className="login-container shadow-sm p-4">
          <Card.Body>
            <Row className="text-center my-4 d-flex justify-content-center align-items-center">
              <img
                src={Logo}
                alt="Logo"
                className="logo-img"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
              />
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

              <p className="mt-3 text-center">
                Don't have an account?{' '}
                <a
                  href="/register"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/register');
                  }}
                  className="text-decoration-underline"
                  style={{ color: '#0d6efd', cursor: 'pointer' }}
                >
                  Sign up here
                </a>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginScreen;

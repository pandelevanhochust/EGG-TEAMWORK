import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import './RegisterScreen.css';


const RegisterScreen = () => {
  const [Membership, setMembership] = useState(false);
  const gen = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpw, setConfirmpw] = useState('');
  const [generation, setGen] = useState('');

  const users = [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      dob: '1990-05-15',
      username: 'johndoe90',
      password: 'password123',
      confirmpw: 'password123',
      generation: 'Millennial',
    },
    {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      dob: '1985-09-20',
      username: 'janesmith85',
      password: 'securePass456',
      confirmpw: 'securePass456',
      generation: 'Gen X',
    },
    {
      first_name: 'Michael',
      last_name: 'Johnson',
      email: 'michael.johnson@example.com',
      dob: '2001-03-10',
      username: 'mikej01',
      password: 'qwerty123',
      confirmpw: 'qwerty123',
      generation: 'Gen Z',
    },
    {
      first_name: 'Emily',
      last_name: 'Brown',
      email: 'emily.brown@example.com',
      dob: '1995-07-25',
      username: 'emilyb95',
      password: 'password789',
      confirmpw: 'password789',
      generation: 'Millennial',
    },
    {
      first_name: 'David',
      last_name: 'Taylor',
      email: 'david.taylor@example.com',
      dob: '1978-12-05',
      username: 'davet78',
      password: 'mypassword321',
      confirmpw: 'mypassword321',
      generation: 'Gen X',
    },
  ];
  
  // export default users;
  

  return (
    <Container fluid className="register-screen d-flex justify-content-center align-items-center mt-4">
      <Card className="register-container shadow-sm p-4">
        <Card.Body>
          <Row className="text-center my-4 d-flex justify-content-center align-items-center ">
          <img src={Logo} alt="Logo" className="logo-img" />
          <h2 className="text-center my-1" >Register</h2>
          </Row>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-4" controlId="first_name">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    value={first_name}
                    required
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-4" controlId="second_name">
                  <Form.Label>Second name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your second name"
                    value={last_name}
                    required
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4" controlId="dob">
              <Form.Label>D.O.B</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                required
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="membership">
              <Form.Label>Are you a member of EGG?</Form.Label>
              <Row>
                <Col xs="auto">
                  <Form.Check
                    type="radio"
                    id="membershipYes"
                    name="membership"
                    label="Yes"
                    value="yes"
                    checked={Membership === true}
                    required
                    onChange={() => setMembership(true)}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Check
                    type="radio"
                    id="membershipNo"
                    name="membership"
                    label="No"
                    value="no"
                    checked={Membership === false}
                    required
                    onChange={() => setMembership(false)}
                  />
                </Col>
              </Row>
            </Form.Group>

            {Membership && (
              <Form.Group className="mb-4" controlId="gen">
                <Form.Label>Which Gen are you as an EGG-er?</Form.Label>
                <Form.Select
                  required
                  value={generation}
                  onChange={(e) => setGen(e.target.value)}
                >
                  <option value="">Select your generation</option>
                  {gen.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}

            <Form.Group className="mb-4" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="confirm_password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                value={confirmpw}
                required
                onChange={(e) => setConfirmpw(e.target.value)}
              />
            </Form.Group>

          <Link href="/">
            <Button variant="primary" type="submit" className="w-100 mt-3 rounded-button">
              Register
            </Button>
          </Link>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterScreen;

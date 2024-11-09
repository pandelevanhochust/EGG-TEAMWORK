import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ProfileScreen.css';

const ProfileScreen = () => {
  return (
    <Container fluid className="profile-screen d-flex justify-content-center align-items-center mt-5">
      <Card className="profile-container shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <div className="profile-details">
            <Row className="mb-3">
              <Col xs={6} className="text-muted">Username:</Col>
              <Col xs={6}>JohnDoe</Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6} className="text-muted">Email:</Col>
              <Col xs={6}>johndoe@example.com</Col>
            </Row>
            <Row className="mb-3">
              <Col xs={6} className="text-muted">Joined:</Col>
              <Col xs={6}>January 1, 2020</Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfileScreen;

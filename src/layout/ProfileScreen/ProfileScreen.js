import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../Header';
import './ProfileScreen.css';

const mockUsers = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    dob: '1990-05-15',
    membership: true,
    generation: 3,
    username: 'johndoe',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Smith',
    dob: '1992-07-20',
    membership: false,
    generation: '',
    username: 'janesmith',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    first_name: 'Alice',
    last_name: 'Brown',
    dob: '1988-10-10',
    membership: true,
    generation: 5,
    username: 'alicebrown',
    email: 'alice.brown@example.com',
  },
  {
    id: 4,
    first_name: 'Bob',
    last_name: 'Williams',
    dob: '1995-02-14',
    membership: true,
    generation: 2,
    username: 'bobwilliams',
    email: 'bob.williams@example.com',
  },
  {
    id: 5,
    first_name: 'Emma',
    last_name: 'Davis',
    dob: '1993-09-22',
    membership: false,
    generation: '',
    username: 'emmadavis',
    email: 'emma.davis@example.com',
  },
];

const ProfileScreen = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [editableField, setEditableField] = useState(null);
  const [editedValue, setEditedValue] = useState('');
  const [avatar, setAvatar] = useState(selectedUser.avatar);
  const navigate = useNavigate();

  const handleEdit = (field) => {
    setEditableField(field);
    setEditedValue(selectedUser[field]);
  };

  const handleSave = () => {
    setSelectedUser((prev) => ({
      ...prev,
      [editableField]: editedValue,
    }));
    setEditableField(null);
  };

  const handleCancel = () => {
    setEditableField(null);
    setEditedValue('');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
        setSelectedUser((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <div style={{ position: 'relative' }}>
        <Button
          variant="link"
          className="back-button"
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            textDecoration: 'none',
            top: '20px',
            left: '20px',
            fontSize: '1.2rem',
          }}
        >
          <FaArrowLeft style={{ marginRight: '5px' }} />
          <span>Home</span>
        </Button>
      </div>
      <Container fluid className="user-profile-screen d-flex flex-column justify-content-center align-items-center mt-4">
        <Card className="user-profile-container shadow-sm p-4 w-75 mt-3">
          <Card.Body>
            <Row className="text-center my-4 d-flex justify-content-center align-items-center">
              <h2 className="text-center my-1">User Profile</h2>
            </Row>
            <Form>

              <Row className="text-center my-4 d-flex justify-content-center align-items-center">
                <div className="avatar-holder">
                  <img
                    src={avatar || 'https://via.placeholder.com/150'} // Default placeholder image
                    alt="User Avatar"
                    className="avatar-img rounded-circle mb-3"
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="avatar-upload"
                    />
                  </Form.Group>
                </div>
              </Row>

              <Form.Group className="mb-3" controlId="first_name">
                <Form.Label>First Name</Form.Label>
                {editableField === 'first_name' ? (
                  <div className="edit-row">
                    <Form.Control
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                    />
                    <Button variant="success" className="save-button" onClick={handleSave}>
                      Save
                    </Button>
                    <Button variant="secondary" className="cancel-button" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="edit-row">
                    <span>{selectedUser.first_name}</span>
                    <Button variant="primary" className="edit-button" onClick={() => handleEdit('first_name')}>
                      Edit
                    </Button>
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                {editableField === 'last_name' ? (
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button variant="success" onClick={handleSave}>
                        Save
                      </Button>{' '}
                      <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>{selectedUser.last_name}</Col>
                    <Col xs="auto">
                      <Button variant="primary" onClick={() => handleEdit('last_name')}>
                        Edit
                      </Button>
                    </Col>
                  </Row>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                {editableField === 'dob' ? (
                  <Row>
                    <Col>
                      <Form.Control
                        type="date"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button variant="success" onClick={handleSave}>Save</Button>{' '}
                      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>{selectedUser.dob}</Col>
                    <Col xs="auto">
                      <Button variant="primary" onClick={() => handleEdit('dob')}>Edit</Button>
                    </Col>
                  </Row>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="membership">
                <Form.Label>Membership</Form.Label>
                <Row>
                  <Col>{selectedUser.membership ? 'Yes' : 'No'}</Col>
                </Row>
              </Form.Group>

              {selectedUser.membership && (
                <Form.Group className="mb-3" controlId="generation">
                  <Form.Label>Generation</Form.Label>
                  {editableField === 'generation' ? (
                    <Row>
                      <Col>
                        <Form.Control
                          as="select"
                          value={editedValue}
                          onChange={(e) => setEditedValue(e.target.value)}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((gen) => (
                            <option key={gen} value={gen}>
                              {gen}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col xs="auto">
                        <Button variant="success" onClick={handleSave}>Save</Button>{' '}
                        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                      </Col>
                    </Row>
                  ) : (
                    <Row>
                      <Col>{selectedUser.generation}</Col>
                      <Col xs="auto">
                        <Button variant="primary" onClick={() => handleEdit('generation')}>Edit</Button>
                      </Col>
                    </Row>
                  )}
                </Form.Group>
              )}

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                {editableField === 'email' ? (
                  <Row>
                    <Col>
                      <Form.Control
                        type="email"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button variant="success" onClick={handleSave}>Save</Button>{' '}
                      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>{selectedUser.email}</Col>
                    <Col xs="auto">
                      <Button variant="primary" onClick={() => handleEdit('email')}>Edit</Button>
                    </Col>
                  </Row>
                )}
              </Form.Group>

              <Tab.Container defaultActiveKey="profile-posts">
                <div className="profile-tabs mt-4">
                  <Nav variant="tabs">
                    <Nav.Item>
                      <Nav.Link style={{ color: "#AD49E1" }} eventKey="profile-posts">Profile Posts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{ color: "#AD49E1" }} eventKey="latest-activity">Latest Activity</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{ color: "#AD49E1" }} eventKey="postings">Postings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link style={{ color: "#AD49E1" }} eventKey="about">About</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Tab.Content className="p-3">
                  <Tab.Pane eventKey="profile-posts">
                    <p>Profile posts content goes here...</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="latest-activity">
                    <p>Latest activity content goes here...</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="postings">
                    <p>Postings content goes here...</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="about">
                    <p>About content goes here...</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Form>
          </Card.Body>
        </Card>
      </Container>

    </>
  );
};

export default ProfileScreen;

import React, { useState } from 'react';
import { Button, Card, Container, Form, FormControl, Image, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import AvatarImg from '../assets/avatar.png';
import './Header.css';

const Header = () => {
  const [userState, setUserState] = useState(true);
  const [Search_key, setSearch_key] = useState('');
  const [Notification,setNotification] = useState(false);

  const notifications = ["Notification 1","Notification 2","Notification 3"];
  
  const navigate = useNavigate();

  const SearchHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

const Logout = () => {
  setUserState(false);
  navigate("/");
}

  return (
    <header>
      <Navbar className="navbar_header" sticky="top" expand="lg" style={{ width: '100%' }}>
        <Container fluid className="py-4">
          
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center egglogo">
            <Image 
              src={Logo} 
              alt="Logo" 
              rounded 
              fluid
              style={{ width: '50px', height: '50px' }}
            />
            <span className="ms-2" style={{ color: '#5a4da5', fontWeight: 'bold', fontSize: '1.5rem' }}>EGG FORUM</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbar-content" />

          <Navbar.Collapse id="navbar-content" className="d-flex gap-3 flex-row navbar-collapse align-items-end text-end ms-auto ">
            <Form className="search-container d-flex justify-content-center mx-auto my-3 my-lg-0 d-none d-md-block" style={{ width: '40%' }}>
              <div className="search-wrapper">
                <FormControl
                  id="searchbar"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={Search_key}
                  onChange={(e) => setSearch_key(e.target.value)}
                  onSubmit={SearchHandler}
                />
                <IoIosSearch className="searchbar_icon" />
              </div>
            </Form>

            {/* <Button variant="primary" className="p-3 rounded-button shadow d-flex align-items-center justify-content-center">
            <IoIosSearch className="searchbar_icon d-md-none" style={{ width: '23px', height: '23px' }} />
            </Button> */}

            {userState && (
              <Nav className="d-flex flex-row align-items-center gap-3 auth-buttons">
                <Link to="/writing">
                  <Button variant="primary" className="p-3 rounded-button shadow d-flex align-items-center justify-content-center">
                    <HiOutlinePencilAlt style={{ width: '23px', height: '23px' }} />
                  </Button>
                </Link>

                <Button variant="primary" 
                        className="p-3 rounded-button shadow d-flex align-items-center justify-content-center"
                        onClick={() => setNotification(!Notification)}>
                  <IoIosNotifications style={{ width: '23px', height: '23px' }} />
                </Button>

                {Notification && (
                <Card
                  className="position-absolute"
                  style={{
                    top: '105px',
                    right: '100px',
                    width: '200px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: '5',
                  }}
                >
                  <Card.Header className="text-center">Notifications</Card.Header>
                <ListGroup
                    variant="flush"
                    className="scrollable-list"
                    style={{
                      maxHeight: '150px',
                      overflowY: 'auto',
                    }}
                  >
                    {notifications.length > 0 ? (
                      notifications.map((notification, index) => (
                        <ListGroup.Item key={index} className="py-2 px-3 text-center">
                          <Link to="" style={{ textDecoration: 'none', color: '#333' }}>
                            {notification}
                          </Link>
                        </ListGroup.Item>
                      ))
                    ) : (
                      <ListGroup.Item className="text-center text-muted py-2">
                        No notifications
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                  <Card.Footer className="text-center">
                    <Link to="/notification" style={{ textDecoration: 'none', color: '#AD49E1' }}>
                      View All
                    </Link>
                  </Card.Footer>
                </Card>
              )}  
                
              

              {/* <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="primary"
                    className="p-3 rounded-button shadow d-flex align-items-center justify-content-center"
                  >
                    <IoIosNotifications style={{ width: '23px', height: '23px' }} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: '300px' }}>
                    <Dropdown.Header>Notifications</Dropdown.Header>
                    <Dropdown.Item>Notification 1</Dropdown.Item>
                    <Dropdown.Item>Notification 2</Dropdown.Item>
                    <Dropdown.Item>Notification 3</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/notifications">View All</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown> */}



                <NavDropdown 
                  title={
                    <Image 
                      src={AvatarImg} 
                      alt="User Avatar" 
                      rounded 
                      fluid 
                      style={{ width: '55px', height: '55px', boxShadow: '0px 1px 1px 1px rgba(0, 0, 0, 0.2)' }} 
                      className=""
                    />
                  } 
                  id="avatar-dropdown" 
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}

            {/* Buttons for Unauthenticated Users */}
            {!userState && (
              <Nav className="d-flex flex-row align-items-center gap-3 auth-buttons">
                <Link to="/login">
                  <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">Register</Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

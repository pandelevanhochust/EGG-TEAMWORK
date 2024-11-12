import React, { useState } from 'react';
import { Button, Card, Container, FormControl, Image, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import AvatarImg from '../assets/avatar.png';
import './Header.css';

const Header = () => {
  const [userState, setUserState] = useState(true);
  const [Search_key, setSearch_key] = useState('');
  const [Notification, setNotification] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const notifications = ["Notification 1", "Notification 2", "Notification 3"];

  const navigate = useNavigate();

  const SearchHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const Logout = () => {
    setUserState(false);
    navigate("/");
  };

  return (
    <header>
      <Navbar className="navbar_header" sticky="top" expand="lg" style={{ width: '100%' }}>
        <Container fluid className="py-2 d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center egglogo p-3">
            <Image
              src={Logo}
              alt="Logo"
              rounded
              fluid
              style={{ width: '50px', height: '50px' }}
            />
            <span className="ms-2" style={{ color: '#5a4da5', fontWeight: 'bold', fontSize: '1.5rem' }}>EGG FORUM</span>
          </Navbar.Brand>

          <div
              className={`search-container d-flex align-items-center position-relative ${
                searchExpanded ? 'expanded' : ''
              }`}
              style={{
                transition: 'all 0.3s ease',
                width: searchExpanded ? '300px' : '50px',
                backgroundColor: '#f8f9fa',
                borderRadius: '30px',
              }}
            >
              <Button
                variant="light"
                className="d-flex align-items-center justify-content-center p-2"
                style={{ borderRadius: '50%', width: '40px', height: '40px' }}
                onClick={() => setSearchExpanded(true)}
              >
                <IoIosSearch style={{ fontSize: '1.5rem', color: '#5a4da5' }} />
              </Button>

              {searchExpanded && (
                <FormControl
                  id="searchbar"
                  type="search"
                  placeholder="Search"
                  className="ps-4 py-2 search-input"
                  style={{
                    borderRadius: '30px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1rem',
                    background: 'transparent',
                    color: '#000',
                  }}
                  value={Search_key}
                  onChange={(e) => setSearch_key(e.target.value)}
                  onKeyDown={SearchHandler}
                  autoFocus
                />
              )}
            </div>
              
          <Navbar.Toggle aria-controls="navbar-content" />

          <Navbar.Collapse id="navbar-content" className="d-lg-flex justify-content-end">
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

                <NavDropdown
                  title={
                    <Image
                      src={AvatarImg}
                      alt="User Avatar"
                      rounded
                      fluid
                      style={{ width: '55px', height: '55px', boxShadow: '0px 1px 1px 1px rgba(0, 0, 0, 0.2)' }}
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

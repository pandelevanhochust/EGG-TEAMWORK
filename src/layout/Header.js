import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo1.png';
import AvatarImg from '../assets/avatar.png';
import './Header.css';

const Header = () => {
  const [userState, setUserState] = useState(true);
  const [Search_key, setSearch_key] = useState('');

  const SearchHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <header>
      <Navbar className="navbar_header" sticky="top" style={{ width: '100%' }}>
        <Container expand="lg" fluid className="d-flex justify-content-between align-items-center py-4">
          
          {/* Logo and Brand Name */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center egglogo ms-5">
            <Image 
              src={Logo} 
              alt="Logo" 
              rounded 
              fluid
              style={{ width: '50px', height: '50px' }}
            />
            <span className="ms-2" style={{ color: '#5a4da5', fontWeight: 'bold', fontSize: '1.5rem' }}>EGG FORUM</span>
          </Navbar.Brand>

          {/* Search Bar */}
          <Form className="search-container d-flex justify-content-center mx-auto" style={{ width: '40%' }}>
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

          {/* Conditional Rendering for Authenticated and Unauthenticated Users */}
          {!userState && (
            <Nav className="d-flex align-items-center gap-3 ms-5 auth-buttons">
              <Link to="/login">
                <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">Log in</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">Register</Button>
              </Link>
            </Nav>
          )}

          {userState && (
            <Nav className="d-flex align-items-center gap-3 ms-5 auth-buttons">
              <Link to="/notifications">
                <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">
                  Notification
                </Button>
              </Link>
              
              {/* Avatar Dropdown Menu */}
              <NavDropdown 
                title={<Image src={AvatarImg} alt="User Avatar" roundedCircle fluid style={{ width: '55px', height: '55px' }} className="shadow"/>} 
                id="dropdown-basic" 
                // align="end"
              >
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

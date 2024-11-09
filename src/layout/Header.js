import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/Logo1.png';
import './Header.css';

const Header = () => {

  const [Search_key,setSearch_key] = useState('');

  const SearchHandler =(e) =>  {
    if (e.key === 'Enter'){
      e.preventDefault();
    }
  }

  return (
    <header>
      <Navbar className="navbar_header" sticky="top" style={{ width: '100%' }}>
        <Container expand="lg" fluid className="d-flex justify-content-between align-items-center py-4">
          
          {/* Logo Section */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center egglogo ms-5">
            <img src={Logo} alt="Logo" className="logo-img" />
            <span className="ms-2" style={{ color: '#5a4da5', fontWeight: 'bold', fontSize: '1.5rem' }}>EGG FORUM</span>
          </Navbar.Brand>
          
      <Form className="search-container d-flex justify-content-center mx-auto" style={{ width: '40%' }}> {/* Centered and set width */}
        <div className="search-wrapper">
        <FormControl
          id="searchbar"
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={Search_key}
          onChange={(e) => setSearch_key(e.target.value)}
          onSubmit ={SearchHandler}
        />
        <IoIosSearch className="searchbar_icon" />
        </div>
      </Form>
          
          <Nav className="d-flex align-items-center gap-3 ms-5 auth-buttons">
            <Link to="/login">
              <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center ">Log in</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" className="custom-button rounded-button shadow d-flex align-items-center justify-content-center">Register</Button>
            </Link>
          </Nav>

        </Container>
      </Navbar> 
    </header>
  );
};

export default Header;

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/Logo1.png';
import './Header.css';

const Header = () => {
  return (
    <header>
    <div className="header">
      <Link to = "/"className="logo">
        <div >
          <img src={Logo} alt="Logo" />
        </div>
      </Link>

      <nav className="menu">

        <div className="auth-buttons">
          <Link to="/login"><Button variant='primary'>Log in</Button></Link>
          <Link to="/register"><Button variant='primary'>Register</Button></Link>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default Header;
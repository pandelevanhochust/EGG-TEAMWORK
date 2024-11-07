import React from 'react';
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
        <div className="reader-button">
          <Link to="/" className="forum">Forums</Link>
          <Link to="/topic" className="lastest">Topic</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login"><button>Log in</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default Header;
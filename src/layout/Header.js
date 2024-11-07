import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Header.css';
import Logo from '../assets/Logo1.png';

const Header = () => {
  return (
    <div className="header">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </header>

      <nav className="menu">
        <div className="reader-button">
          <Link to="/" className="forum">Forums</Link>
          <Link to="/topic" className="lastest">Latests</Link>
        </div>
        <div className="auth-buttons">
          <Link to="/login"><button>Log in</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
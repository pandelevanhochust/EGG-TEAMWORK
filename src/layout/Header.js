import React from 'react';
import '../App.css';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <header class="header">
        <div class="logo">
        {/* <img src="image/voz-logo_2x.png" alt="Voz"> */}
        </div>
        </header>

    <nav class="menu">
        <div class="reader-button">
            <a href="https://voz.vn/" class="forum">Forums</a>
            <a href="https://voz.vn/whats-new/" class="lastest">Latests</a>
        </div>
        <div class="auth-buttons">
            <button>Log in</button>
            <button>Register</button>
        </div>
    </nav>

    </div>
  )
}

export default Header

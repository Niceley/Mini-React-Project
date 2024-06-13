import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<>
    <div className="header">
      <div className="left">
        <a>
          <Link to="/">
          <img alt="Logo myEfrei" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Languages/French/LOGO_EFREI-WEB_blanc.png"></img>
          </Link>
        </a>
      </div>
    </div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item active"><a href="#">ACCUEIL</a></li>
        <li className="nav-item"><a href="#">PLANNING</a></li>
        <li className="nav-item dropdown">
          <a href="#">SCOLARITÉ &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">L'ÉCOLE &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">VIE ÉTUDIANTE &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">STAGES ET ALTERNANCES &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">OUTILS &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">AIDES &#9662;</a>
          <div className="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;

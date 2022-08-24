import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

//Function and Hook creation for our Navbar
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <h4 className="logo">3S Silicon </h4>
      <ul className={isMobile? "nav-links-mobile": "nav-links"}
      onClick = {()=> setIsMobile(false)}>
        <Link to="/system" className="system">
          <li>System</li>
        </Link>

        <Link to="/runscreen" className="runscreen">
          <li>Run Screen</li>
        </Link>

        <Link to="/module" className="module">
          <li>Module</li>
        </Link>

        <Link to="/diagnostic" className="diagnostic">
          <li>Diagnostic</li>
        </Link>
      </ul>

      <button className="mobile-menu-icon"
      onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times" />
        ) : (
          <i className="fas fa-bars" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

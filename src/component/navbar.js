import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <div>
      <nav className="nav">
        <Router>
          <div className="menu" onClick={() => setShowmenu(!showmenu)}>
            <div className={showmenu ? 'menu-link' : 'menu-none'}>
              <ul>
                <li>
                  <Link to="home" duration="700" smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about-us" duration="700" smooth={true}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="resume" duration="700" smooth={true}>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="works" duration="700" smooth={true}>
                    Works
                  </Link>
                </li>
                <li>
                  <Link to="contact-us" duration="700" smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Router>
        <h1>MENU</h1>
      </nav>
    </div>
  );
};

export default Navbar;

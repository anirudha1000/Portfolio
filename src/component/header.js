import React from 'react';
import Bg from './Images/intro-bg.jpg';
import Navbar from './navbar';
import Instagram from './Images/icons8-instagram-reels-50.png';
import Twitter from './Images/icons8-twitter-50.png';
import Facebook from './Images/icons8-facebook-50.png';
import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
const header = () => {
  return (
    <div>
      <header id="home">
        <img src={Bg} alt="bg" />
        <div className="overlay-1"></div>
        <div className="overlay-2"></div>
        <Router>
          <div id="content-1">
            <h2>HELLO, WORLD.</h2>
            <h1>I'm Aniruddha Gaikwad.</h1>
            <p>FRONT-END DEVELOPER</p>
            <div>
              <Link to="about-us" duration="700" smooth={true}>
                MORE ABOUT ME
              </Link>
            </div>
            <article className="social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <img src={Facebook} />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noreferrer">
                <img src={Instagram} />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noreferrer">
                <img src={Twitter} />
              </a>
            </article>
          </div>
        </Router>
        <Navbar></Navbar>
      </header>
    </div>
  );
};

export default header;

import React from 'react';

const about = () => {
  return (
    <div className="content" id="about-us">
      <h1>ABOUT</h1>
      <p>
        I am hardworking who is willing to gain entry level experience.
        <br></br>I am very reliable and punctual, with exceptionally dependable
        character, looking for an opportunity to increase knowledge.<br></br> I
        have the passion for building websites.
      </p>

      <div className="profile">
        <ul className="info">
          <li>
            <strong>FULLNAME :</strong> <br></br>
            <span>Aniruddha Gaikwad</span>
          </li>
          <li>
            <strong>BIRTH DATE :</strong> <br></br>
            <span> Sept 15,1996</span>
          </li>
          <li>
            <strong>POST :</strong> <br></br>
            <span>Frontend developer</span>
          </li>
          <li>
            <strong>EMAIL :</strong> <br></br>
            <span>aniruddhagaikwad1000@gmail.com</span>
          </li>
        </ul>
        <ul className="skill-bar">
          <li>
            <div className="skill">HTML</div>
            <div className="progress-bar html">
              <span></span>
            </div>
          </li>
          <li>
            <div className="skill">CSS</div>
            <div className="progress-bar css">
              <span></span>
            </div>
          </li>
          <li>
            <div className="skill">JAVASCRIPT</div>
            <div className="progress-bar javascript">
              <span></span>
            </div>
          </li>
          <li>
            <div className="skill">REACT.JS</div>
            <div className="progress-bar react">
              <span></span>
            </div>
          </li>
          <li>
            <div className="skill">MATERIAL UI</div>
            <div className="progress-bar materialui">
              <span></span>
            </div>
          </li>
          <li>
            <div className="skill">BOOTSTRAP</div>
            <div className="progress-bar bootstrap">
              <span></span>
            </div>
          </li>
          q
          <li>
            <div className="skill">Tailwind CSS</div>
            <div className="progress-bar bootstrap">
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;

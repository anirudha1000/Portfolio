import React, { useState } from 'react';
import Experiences from './projectapi/experience';

const Experience = () => {
  const [data, setData] = useState(Experiences);
  console.log(data);
  return (
    <div className="bg-color resume" id="resume">
      <div className="content">
        <h1>RESUME</h1>
        <p>
          I am hardworking who is willing to gain entry level experience.
          <br></br>I am very reliable and punctual, with exceptionally
          dependable character, looking for an opportunity to increase
          knowledge.<br></br> I have the passion for building websites.
        </p>
        <div className="flex">
          <div>
            <h1>EDUCATION</h1>
            <h4>BACHELOR OF COMPUTER APPLICATION</h4>
            <p>Abhinav Education Society Pune</p>
            <h5>2020</h5>
            <h4>CERTIFIED IN REACT.JS</h4>
            <p>Seven Mentor Pvt.Ltd</p>
            <h5>2022</h5>
          </div>
          <hr></hr>
          <div>
            <h1>E X P E R I E N C E</h1>
            <h4>J R . F R O N T - E N D D E V E L O P E R</h4>
            <p>Majestic Technisoft</p>
            <p>6 months internship</p>
            <div className="ul">
              {data.map((curElm, key) => {
                return (
                  <>
                    <ul>
                      <li>{curElm.expertise}</li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

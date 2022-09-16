import React, { useState } from 'react';
import Project from './projectapi/projectapi';
import First from './Images/ClassPass_Press_Image32.png';
const Projects = () => {
  const [projects, setProjects] = useState(Project);

  console.log(projects);
  return (
    <div className="content set" id="works">
      <h1>CHECK OUT SOME OF MY WORKS</h1>
      <div className="flex">
        {projects.map((curElm, key) => {
          return (
            <>
              <div className="html">
                <a href={curElm.link} target="__blank">
                  <img src={First} />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';

const Project = ( {data }) => {
    const {title, description, skills, links, image } = data;
    return (
        <div className="projects-container">
          <div className="project-card">
            <div className="project-screenshot" style={{background: `url(${image}) 0% 0% / cover no-repeat` }}></div>
            <div className="project-background"></div>
            <div className="project-content">
              <h3>{title}</h3>
                <p>{description}</p>
              <div className="project-skills">
              {
                      skills.map( e => (
                <span className="project-skill"
                      key={e}> {e}
                </span>
                      ))
                  }
              </div>
              
              <div className="project-links">
                <a target="_blank" href="https://github.com/Skobraf/React-Redux-Expensify-app" className="project-link">View code</a>
                <a target="_blank" href="http://expensify.mead.io/" className="project-link">Explore demo</a>
              </div>
            </div>
            </div>
          </div>
    )
}

export default Project;
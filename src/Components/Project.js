import React from 'react';

const Project = ( {data }) => {
    const {title, description, skills, links, image } = data;
    return (
        <div class="projects-container">
          <div class="project-card">
            <div class="project-screenshot" style={{background: `url(${image}) 0% 0% / cover no-repeat` }}></div>
            <div class="project-background"></div>
            <div class="project-content">
              <h3>{title}</h3>
                <p>{description}</p>
              <div class="project-skills">
              {
                      skills.map( e => (
                <span className="project-skill"
                      key={e}> {e}
                </span>
                      ))
                  }
              </div>
              
              <div class="project-links">
                <a target="_blank" href="https://github.com/Skobraf/React-Redux-Expensify-app" class="project-link">View code</a>
                <a target="_blank" href="http://expensify.mead.io/" class="project-link">Explore demo</a>
              </div>
            </div>
            </div>
          </div>
    )
}

export default Project;
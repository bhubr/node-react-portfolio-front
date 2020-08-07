import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

function ProjectList() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
          {
            projects.map((project) => (
              <div className="col-md-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

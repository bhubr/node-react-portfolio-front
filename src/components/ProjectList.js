import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectList() {
  return (
    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;

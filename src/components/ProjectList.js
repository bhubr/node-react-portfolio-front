import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import projectPropTypes from '../prop-types/project';

function ProjectList({ projects }) {
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

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    projectPropTypes,
  ).isRequired,
};

export default ProjectList;

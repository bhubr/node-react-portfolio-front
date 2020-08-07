import React from 'react';
import projectPropTypes from '../prop-types/project';

function ProjectCard({ project }) {
  const {
    name,
    description,
    github_url: githubUrl,
    picture_url: pictureUrl,
  } = project;
  return (
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" src={pictureUrl} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            <span className="icon-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: projectPropTypes,
};

ProjectCard.defaultProps = {
  project: {
    name: '<Name>',
    description: '<Description>',
    github_url: 'https://github.com',
    picture_url: 'https://via.placeholder.com/320x200',
  },
};

export default ProjectCard;

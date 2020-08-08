import React from 'react';
import Modal from 'react-modal';
import projectPropTypes from '../prop-types/project';

function ProjectDetailsModal({ project }) {
  if (!project) {
    return null;
  }
  return (
    <Modal
      isOpen
    >
      <h2>{project.name}</h2>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={project.picture_url}
            alt={project.name}
          />
        </div>

        <div className="col-md-6">
          <p>{project.description}</p>
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            <span className="icon-github" /> Visit repo
          </a>
        </div>
      </div>
    </Modal>
  );
}

ProjectDetailsModal.propTypes = {
  project: projectPropTypes.isRequired,
};

export default ProjectDetailsModal;

import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import projectPropTypes from '../prop-types/project';
import './Modal.css';

function ProjectDetailsModal({
  project, handleClose, handlePrev, handleNext,
}) {
  if (!project) {
    return null;
  }
  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
    >
      <button
        type="button"
        className="Modal-button Modal-ctrl Modal-prev"
        onClick={handlePrev}
      >
        &lsaquo;
      </button>
      <button
        type="button"
        className="Modal-button Modal-ctrl Modal-next"
        onClick={handleNext}
      >
        &rsaquo;
      </button>
      <div className="d-flex justify-content-between align-items-start">
        <h2>{project.name}</h2>
        <button
          type="button"
          className="Modal-button"
          onClick={handleClose}
        >
          <span>&times;</span>
        </button>
      </div>
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
            <span className="icon-github" />
            {' '}
            Visit repo
          </a>
        </div>
      </div>
    </Modal>
  );
}

ProjectDetailsModal.propTypes = {
  project: projectPropTypes,
  handleClose: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

ProjectDetailsModal.defaultProps = {
  project: null,
};

export default ProjectDetailsModal;

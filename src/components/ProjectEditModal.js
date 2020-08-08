import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import EditProjectForm from './EditProjectForm';
import projectPropTypes from '../prop-types/project';
import './Modal.css';

function ProjectEditModal({
  project, handleClose,
}) {
  if (!project) {
    return null;
  }
  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
    >
      <div className="d-flex justify-content-between align-items-start">
        <h2>
          Edit
          {' '}
          <em>{project.name}</em>
        </h2>
        <button
          type="button"
          className="Modal-button"
          onClick={handleClose}
        >
          <span>&times;</span>
        </button>
      </div>
      <div className="row mt-5">
        <EditProjectForm project={project} />
      </div>
    </Modal>
  );
}

ProjectEditModal.propTypes = {
  project: projectPropTypes.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ProjectEditModal;

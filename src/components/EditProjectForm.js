/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';
import Toast from 'light-toast';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
import projectPropTypes from '../prop-types/project';

class EditProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.project };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id } = this.state;
    axios.put(`/api/projects/${id}`, this.state)
      .then((res) => {
        Toast.success('Project updated!', 1000);
        const { handleClose, updateProject } = this.props;
        updateProject(res.data);
        handleClose();
      })
      .catch(() => {
        Toast.fail('Failed to update project!', 1000);
      });
  }

  render() {
    return (
      <ProjectForm
        values={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

EditProjectForm.propTypes = {
  project: projectPropTypes.isRequired,
  handleClose: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default EditProjectForm;

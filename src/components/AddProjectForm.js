/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';
import Toast from 'light-toast';
import ProjectForm from './ProjectForm';

const initialState = {
  name: '',
  description: '',
  picture_url: '',
  github_url: '',
};

class AddProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/projects', this.state)
      .then(() => {
        Toast.success('Project created!', 1000);
        this.setState(initialState);
      })
      .catch(() => {
        Toast.fail('Failed to create project!', 1000);
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

export default AddProjectForm;

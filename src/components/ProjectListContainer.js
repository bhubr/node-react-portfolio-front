import React, { Component } from 'react';
import ProjectList from './ProjectList';
import apiService from '../services/api';

class ProjectListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects() {
    apiService.getAllProjects()
      .then((projects) => this.setState({ projects }));
  }

  render() {
    const { projects } = this.state;
    return (
      <ProjectList projects={projects} />
    );
  }
}

export default ProjectListContainer;

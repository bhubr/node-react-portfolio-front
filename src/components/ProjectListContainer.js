import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Loader from './Loader';
import apiService from '../services/api';

class ProjectListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      error: null,
      ready: false,
    };
  }

  componentDidMount() {
    this.getAllProjects();
  }

  getAllProjects() {
    apiService.getAllProjects()
      .then((projects) => this.setState({ projects }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ ready: true }));
  }

  render() {
    const { projects, error, ready } = this.state;
    if (!ready) {
      return <Loader />;
    }
    if (error) {
      return (
        <div className="container">
          <div className="alert alert-danger text-center" role="alert">
            An error occurred! Please come back later!
          </div>
        </div>
      );
    }
    return (
      <ProjectList projects={projects} />
    );
  }
}

export default ProjectListContainer;

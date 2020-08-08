import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Loader from './Loader';
import apiService from '../services/api';
import matchPropTypes from '../prop-types/match';

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
    const { match: { params } } = this.props;
    const { projectId } = params;
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
      <>
        <h2>{projectId}</h2>
        <ProjectList projects={projects} />
      </>
    );
  }
}

ProjectListContainer.propTypes = {
  match: matchPropTypes.isRequired,
};

export default ProjectListContainer;

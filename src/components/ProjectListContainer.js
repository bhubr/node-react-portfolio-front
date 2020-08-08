import React, { Component } from 'react';
import ProjectList from './ProjectList';
import Loader from './Loader';
import ProjectDetailsModal from './ProjectDetailsModal';
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

  findProject() {
    const { match: { params } } = this.props;
    const { projectId: projectIdStr } = params;
    if (!projectIdStr) {
      return undefined;
    }
    const projectId = Number(projectIdStr);
    const { projects } = this.state;
    return projects.find(project => project.id === projectId);
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
    const project = this.findProject();
    return (
      <>
        <ProjectDetailsModal
          project={project}
        />
        <ProjectList projects={projects} />
      </>
    );
  }
}

ProjectListContainer.propTypes = {
  match: matchPropTypes.isRequired,
};

export default ProjectListContainer;

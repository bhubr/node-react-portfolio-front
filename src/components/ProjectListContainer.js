import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectList from './ProjectList';
import Loader from './Loader';
import ProjectDetailsModal from './ProjectDetailsModal';
import ProjectEditModal from './ProjectEditModal';
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
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
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
      return -1;
    }
    const projectId = Number(projectIdStr);
    const { projects } = this.state;
    return projects.findIndex((project) => project.id === projectId);
  }

  handleCloseModal() {
    const { history } = this.props;
    history.push('/');
  }

  handlePrev() {
    const { history } = this.props;
    const { projects } = this.state;
    let projectIndex = this.findProject();
    if (projectIndex === 0) {
      projectIndex = projects.length - 1;
    } else {
      projectIndex -= 1;
    }
    const project = projects[projectIndex];
    history.push(`/details/${project.id}`);
  }

  handleNext() {
    const { history } = this.props;
    const { projects } = this.state;
    let projectIndex = this.findProject();
    if (projectIndex === projects.length - 1) {
      projectIndex = 0;
    } else {
      projectIndex += 1;
    }
    const project = projects[projectIndex];
    history.push(`/details/${project.id}`);
  }

  renderModal() {
    const projectIndex = this.findProject();
    if (projectIndex === -1) {
      return null;
    }
    const { match: { path } } = this.props;
    const { projects } = this.state;
    switch (path) {
      case '/details/:projectId':
        return (
          <ProjectDetailsModal
            project={projects[projectIndex]}
            handleClose={this.handleCloseModal}
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
          />
        );
      case '/edit-project/:projectId':
        return (
          <ProjectEditModal
            project={projects[projectIndex]}
            handleClose={this.handleCloseModal}
          />
        );
      default:
        return <h2>Error!</h2>;
    }
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
      <>
        {
          this.renderModal()
        }
        <ProjectList projects={projects} />
      </>
    );
  }
}

ProjectListContainer.propTypes = {
  match: matchPropTypes.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(ProjectListContainer);

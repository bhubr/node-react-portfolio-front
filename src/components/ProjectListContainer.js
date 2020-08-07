import React, { Component } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';

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
    axios.get('/api/projects')
      .then((res) => {
        this.setState({
          projects: res.data,
        });
      });
  }

  render() {
    const { projects } = this.state;
    return (
      <ProjectList projects={projects} />
    );
  }
}

export default ProjectListContainer;

import React, { Component } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import projectsList from '../data/projects.json';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectsList,
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
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {
              projects.map((project) => (
                <div className="col-md-4" key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;

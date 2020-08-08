/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import axios from 'axios';

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
      .then((res) => {
        this.setState(initialState);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      name, description, picture_url: pictureUrl, github_url: githubUrl,
    } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Project name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" value={description} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="picture_url">Picture URL</label>
            <input type="text" className="form-control" id="picture_url" name="picture_url" value={pictureUrl} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="github_url">GitHub repo URL</label>
            <input type="text" className="form-control" id="github_url" name="github_url" value={githubUrl} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProjectForm;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class AddProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      picture_url: '',
      github_url: '',
    };
  }

  render() {
    const {
      name, description, picture_url: pictureUrl, github_url: githubUrl,
    } = this.state;
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Project name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" value={description} />
          </div>
          <div className="form-group">
            <label htmlFor="picture_url">Picture URL</label>
            <input type="text" className="form-control" id="picture_url" name="picture_url" value={pictureUrl} />
          </div>
          <div className="form-group">
            <label htmlFor="github_url">GitHub repo URL</label>
            <input type="text" className="form-control" id="github_url" name="github_url" value={githubUrl} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProjectForm;

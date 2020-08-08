/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import projectPropTypes from '../prop-types/project';

function ProjectForm({ values, handleChange, handleSubmit }) {
  const {
    name, description, picture_url: pictureUrl, github_url: githubUrl,
  } = values;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Project name</label>
          <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" name="description" value={description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="picture_url">Picture URL</label>
          <input type="text" className="form-control" id="picture_url" name="picture_url" value={pictureUrl} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="github_url">GitHub repo URL</label>
          <input type="url" className="form-control" id="github_url" name="github_url" value={githubUrl} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  values: projectPropTypes.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ProjectForm;

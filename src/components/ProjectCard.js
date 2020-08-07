import React from 'react';

function ProjectCard() {
  return (
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" src="https://via.placeholder.com/320x200" alt="project name" />
      <div className="card-body">
        <h5 className="card-title">This project</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>

          <a
            href="https://github.com/bhubr/bootstrap-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            <span className="icon-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

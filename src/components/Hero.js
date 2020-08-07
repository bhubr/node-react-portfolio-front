import React from 'react';

function Hero() {
  return (

    <section className="jumbotron text-center">
      <div className="container">
        <h1>John Doe</h1>
        <p className="lead text-muted">A little paragraph about me.</p>
        <p className="social-networks">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <span className="icon-lg icon-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span className="icon-lg icon-linkedin" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;

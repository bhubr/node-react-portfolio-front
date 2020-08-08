import React from 'react';
import matchPropTypes from '../prop-types/match';
import Hero from './Hero';
import ProjectListContainer from './ProjectListContainer';

function Home({ match }) {
  return (
    <>
      <Hero />
      <ProjectListContainer match={match} />
    </>
  );
}

Home.propTypes = {
  match: matchPropTypes.isRequired,
};

export default Home;

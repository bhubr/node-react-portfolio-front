import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectListContainer from './components/ProjectListContainer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Hero />
        <ProjectListContainer />
      </main>
    </div>
  );
}

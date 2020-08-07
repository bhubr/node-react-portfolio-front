import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Hero />
        <ProjectList />
      </main>
    </div>
  );
}

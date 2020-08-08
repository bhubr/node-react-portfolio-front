import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectListContainer from './components/ProjectListContainer';
import AddProjectForm from './components/AddProjectForm';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Switch>
          <Route exact path="/">
            <Hero />
            <ProjectListContainer />
          </Route>
          <Route>
            <AddProjectForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AddProjectForm from './components/AddProjectForm';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:projectId" component={Home} />
          <Route path="/add-project">
            <AddProjectForm />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

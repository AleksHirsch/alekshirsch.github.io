import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useGaTracker from './useGaTracker';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Photography from './Photography/Photography';
import Error from './Error';

function App() {
  useGaTracker();

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />

        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/photgraphy" exact component={Photography} />

        <Route path="/404" component={Error} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;

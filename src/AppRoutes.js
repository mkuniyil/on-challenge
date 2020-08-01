import React from 'react';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Results from './pages/results/Results';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;

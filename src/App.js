import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@/routes/Home';
import Page1 from '@/routes/Page1';
import Page404 from '@/routes/Page404';
import './App.css';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/page1' component={Page1} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}



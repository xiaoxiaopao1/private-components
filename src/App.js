import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@/routes/Home';
import Page1 from '@/routes/Page1';
import Page404 from '@/routes/Page404';
import SideBar from '@/components/SideBar';

import routeConf from '@/constants/routeConf';
import './App.css';

const routeRender = (routes) => {
  return routes.map(item => {
    if (!item.children) {
      return <Route exact key={item.key} path={item.path} component={item.component} />
    }
    return routeRender(item.children);
  });
}

export default () => {
  return (
    <Router>
      <SideBar />
      <div className='wrap-page'>
        <Switch>
          {
            routeRender(routeConf)
          }
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}



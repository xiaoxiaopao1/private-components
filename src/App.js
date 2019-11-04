import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from '@/routes/Page404';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

import { routeArr } from '@/constants/routeConf';



import './App.css';

const routeRender = () => {
  let result = [];
  const recursiveRoute = (routes) => {
    routes.map(item => {
      if (!item.category) {
        result.push(<Route exact key={item.key} path={item.path} component={item.component} />);
      }
      if (item.children) {
        recursiveRoute(item.children);
      }
    })
  };
  recursiveRoute(routeArr);
  return result;
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommon: true
    };
  }

  toggleShowCommon = (showCommon) => {
    this.setState({showCommon});
  }

  render() {
    return (
      <Router>
        { this.state.showCommon && <Header /> }
        <div className='main-content'>
          <div className='wrap-page clear-fix'>
            {this.state.showCommon && <SideBar />}
            <Switch>
              { routeRender(routeArr) }
              <Route 
                render={props => (
                  <Page404 {...props} toggleShowCommon={this.toggleShowCommon}/>
                )} 
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}



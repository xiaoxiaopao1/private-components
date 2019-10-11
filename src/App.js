import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page404 from '@/routes/Page404';
import Header from '@/components/Header';
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

// export default () => {
//   return (
//     <Router>
//       <Header />
//       <div className='main-content'>
//         <SideBar />
//         <div className='wrap-page clear-fix'>
//           <Switch>
//             {
//               routeRender(routeConf)
//             }
//             <Route component={Page404} />
//           </Switch>
//         </div>
//       </div>
      
//     </Router>
//   );
// }

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
          { this.state.showCommon && <SideBar /> }
          <div className='wrap-page clear-fix'>
            <Switch>
              { routeRender(routeConf) }
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



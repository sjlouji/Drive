import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  store from './store';
import  routes from './Routes'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';


export default class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Provider store={ store }>
         <Router history={ history }>
            <Fragment>
              {renderRoutes(routes)}
            </Fragment>
         </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


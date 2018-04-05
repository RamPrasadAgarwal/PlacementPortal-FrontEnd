import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/header';
// import Signup from '../Signup';
// import Login from '../Login';
import Welcome from '../Welcome/welcome';
// import NotFound from '../NotFound404';
// import './index.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome} />
      {/* <Route path="/signup" component={Signup} /> */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="*" exact component={NotFound} /> */}
    </Switch>
  </div>
);


export default withRouter(App);

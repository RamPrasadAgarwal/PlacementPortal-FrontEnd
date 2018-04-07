import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from '../Header/header';
import Welcome from '../Welcome/welcome';
import EditProfile from '../EditProfile/editprofile';
import Company from '../Company/company';
// import NotFound from '../NotFound404';
// import './index.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/editprofile" component={EditProfile} />

      {/* <Route path="*" exact component={NotFound} /> */}
      <Route exact path="/company" component={Company} />
    </Switch>
  </div>
);


export default withRouter(App);

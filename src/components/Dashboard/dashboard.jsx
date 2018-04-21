import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Company from '../Company/company';
// import PropTypes from 'prop-types';
import './dashboard.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    fetch('/company', {
      method: 'GET',
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then(console.log);
  }
  render() {
    return (
      <div>
        {this.state.companies.map(company =>
          <Company />)}
      </div>
    );
  }
}

export default withRouter(Dashboard);

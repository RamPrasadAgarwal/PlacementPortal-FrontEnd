import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Company from '../Company/company';
// import PropTypes from 'prop-types';
import './dashboard.css';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: null,
    };
  }
  componentWillMount() {
    fetch('/company', {
      method: 'GET',
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        if (response.code === 200) {
          this.setState({
            companies: response.message,
          });
        }
      });
  }
  render() {
    if (this.state.companies !== null) {
      return (
        <div>
          {this.state.companies.map(company =>
            <Company company={company} />)}
        </div>
      );
    }
    return (<div>Fetching companies, Please wait</div>);
  }
}

export default withRouter(Dashboard);

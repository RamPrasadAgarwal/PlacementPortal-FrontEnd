import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Company from '../Company/company';
import Notify from '../FinalProf/notify';
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
        if (response.code === 200) {
          console.log(response.message);
          this.setState({
            companies: response.message,
          });
        } else if (response.code === 400) {
          this.props.history.push('/editprofile', { message: 'Please Complete Your Profile To Continue!', type: 'error' });
        }
      });
  }
  render() {
    if (this.state.companies !== null) {
      console.log(this.state.companies);
      if (this.state.companies === 'Placed') {
        console.log('insed');
        return (<Notify />);
      }
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

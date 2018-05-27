import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/form';
import './place.css';

class Place extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errortype: null,
    };
  }

  promoteUser(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const usn = data.get('usn');
    const password = data.get('password');
    const companyName = data.get('company');
    const payload = {
      usn,
      companyName,
      password,
    };
    fetch('/place', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.message === 'Placed Successfully') {
          this.setState({
            errortype: 'Success',
          });
        } else {
          this.setState({
            errortype: 'Error',
          });
        }
        this.setState({
          error: response.message,
        });
      });
  }

  render() {
    return (
      <div className="signup-body-div">
        <div className="signup-body">
          <div className="signup-text">
            <div className="LoginForm" />
          </div>
          <Form
            error={this.state.error}
            errorType={this.state.errortype}
            submit={(e) => { this.promoteUser(e); }}
            formHeading="Place a Student"
            buttonMessage="Promote"
          >
            <input
              type="text"
              name="usn"
              required
              placeholder="USN of Student"
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company Name"
            />
            <input
              type="password"
              name="password"
              placeholder="Admin Password"
              required
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default Place;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/form';
import './admin.css';

class Welcome extends Component {
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
    const payload = {
      usn,
      password,
    };
    fetch('/promote', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.message === 'Pomoted Successfully') {
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
            formHeading="Promote To Placement Co-ordinator"
            buttonMessage="Promote"
          >
            <input
              type="text"
              name="usn"
              required
              placeholder="USN of Student"
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

Welcome.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;

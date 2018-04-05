import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/form';
import './welcome.css';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  componentWillMount() {
    if (window.localStorage.getItem('cryptologgedin') === 'true') {
      this.props.history.push('/');
    }
  }
  registerUser(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const fullName = data.get('fullname');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmpassword');
    const mobileNumbe = data.get('contact');
    if (password !== confirmPassword) {
      this.setState({
        error: 'Ops! Password Mismatch',
      });
    } else {
      const payload = {
        fullName,
        email,
        password,
        confirmPassword,
        mobileNumbe,
      };
      fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
        .then((response) => {
          switch (response.status) {
            case 201:
              this.props.history.push('/login', { message: 'Registration Successfull! Please login', messageType: 'Success' });
              break;

            case 409:
              this.setState({
                error: 'You are already registered',
              });
              break;

            case 422:
              this.setState({
                error: 'Please provide correct details',
              });
              break;

            default: this.setState({
              error: 'Sorry! some internal error occured',
            });
          }
        });
    }
  }

  render() {
    return (
      <div className="signup-body-div">
        <div className="signup-body">
          <div className="signup-text">
          <div className="LoginForm">
        <Form
          error={this.props.message}
          errorType={this.props.messageType}
          formHeading="Login"
          buttonMessage="Login"
          submit={(e) => { this.submit(e); }}
        >
          <input
            type="email"
            name="usn"
            placeholder="Enter your USN"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form>
      </div>
          </div>

          <Form
            error={this.state.error}
            submit={(e) => { this.registerUser(e); }}
            formHeading="Register"
            buttonMessage="Create your account"
          >
            <input
              type="text"
              name="usn"
              required
              placeholder="Enter your USN"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
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

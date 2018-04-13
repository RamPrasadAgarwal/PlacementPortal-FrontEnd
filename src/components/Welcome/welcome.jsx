import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/form';
import './welcome.css';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      errorsignup: null,
      errorlogin: null,
    };
  }

  componentWillMount() {
    if (window.localStorage.getItem('placementloggedin') === 'true') {
      this.props.history.push('/dashboard');
    }
  }
  registerUser(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const usn = data.get('usn');
    const password = data.get('password');
    const fullName = data.get('name');
    const confirmPassword = data.get('confirmpassword');
    if (password !== confirmPassword) {
      this.setState({
        errorsignup: 'Ops! Password Mismatch',
      });
    } else {
      const payload = {
        usn,
        password,
        fullName,
      };
      fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
        .then(response => response.json())
        .then((response) => {
          switch (response.code) {
            case 201:
              window.localStorage.setItem('placementtoken', response.token);
              window.localStorage.setItem('placementusername', response.fullName);
              window.localStorage.setItem('placementloggedin', 'true');
              this.props.history.push('/editprofile');
              break;

            default: this.setState({
              errorsignup: response.message,
            });
          }
        });
    }
  }
  loginUser(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const usn = data.get('usn');
    const password = data.get('password');
    const payload = {
      usn,
      password,
    };
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        switch (response.code) {
          case 200:
            window.localStorage.setItem('placementtoken', response.token);
            window.localStorage.setItem('placementusername', response.fullName);
            window.localStorage.setItem('placementloggedin', 'true');
            this.props.history.push('/dashboard');
            break;

          case 409:
            this.setState({
              errorlogin: 'Username or Password Invalid',
            });
            break;

          default: this.setState({
            errorlogin: 'Sorry! some internal error occured',
          });
        }
      });
  }

  render() {
    return (
      <div className="signup-body-div">
        <div className="signup-body">
          <div className="signup-text">
            <div className="LoginForm">
              <Form
                error={this.state.errorlogin}
                formHeading="Login"
                buttonMessage="Login"
                submit={(e) => { this.loginUser(e); }}
              >
                <input
                  type="text"
                  name="usn"
                  placeholder="USN"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form>
            </div>
          </div>
          <Form
            error={this.state.errorsignup}
            submit={(e) => { this.registerUser(e); }}
            formHeading="Register"
            buttonMessage="Create your account"
          >
            <input
              type="text"
              name="usn"
              required
              placeholder="USN"
            />
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
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

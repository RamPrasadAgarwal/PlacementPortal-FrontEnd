import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginButton: false,
    };
  }
  toggleLogin() {
    this.setState({
      loginButton: !this.state.loginButton,
    });
  }
  logout() {
    window.localStorage.setItem('placementtoken', null);
    window.localStorage.setItem('placementusername', null);
    window.localStorage.setItem('placementloggedin', null);
    window.localStorage.setItem('placementispc', null);
    this.forceUpdate();
    this.props.history.push('/');
  }

  render() {
    return (
      <header className="Header">
        <div className="Header-container">
          <Link className="Header-home-link" to="/">
            <h3
              className="Header-heading"
            >
              <span className="hidden-xs">Placement Portal</span>
            </h3>
          </Link>
          {
          window.localStorage.getItem('placementloggedin') === 'true' ?
            <div className="Header-button-container hidden-xs">
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/dashboard"
              >
                <p>Dashboard</p>
              </NavLink>
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/profile"
              >
                <p>Profile</p>
              </NavLink>
              {window.localStorage.getItem('placementispc') === 'true' ?
                <NavLink
                  className="register-button-a"
                  activeClassName="Header-button-selected"
                  to="/newcompany"
                >
                  <p>Enroll Company</p>
                </NavLink>
                : ''
              }
            </div>
              : ''}
          {
          window.localStorage.getItem('placementloggedin') === 'true' ?

            <div className="Header-user">
              <p
                className="Header-username-container"
                onClick={() => this.toggleLogin()}
              >
                {window.localStorage.getItem('placementusername')} <i className="fas fa-caret-down" />
                {this.state.loginButton ?
                  <div className="Header-logout-link">
                    <hr className="links-divider display-xs" />
                    <button
                      className="Header-logout-button"
                      onClick={() => this.logout()}
                    ><p>Logout </p><i className="fas fa-sign-out-alt" />
                    </button>
                  </div>
              : ''}
              </p>
            </div> : ''
            }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);

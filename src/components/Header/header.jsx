import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
      loginButton: false,
      notifications: [],
      numberNotifications: 0,
    };
  }
  
  logout() {
    window.localStorage.setItem('placementloggedin', false);
    window.localStorage.setItem('placementtoken', null);
    window.localStorage.setItem('placementusername', null);
    window.localStorage.setItem('placementNotifications', null);
    this.setState({
      notifications: [],
      numberNotifications: 0,
    });
    this.forceUpdate();
    this.props.history.push('/');
  }
  toggleLogin = () => {
    this.setState({
      loginButton: !this.state.loginButton,
      showNotification: false,
    });
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
                to="/"
                exact
              >
                <p>Home</p>
              </NavLink>
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/portfolio"
              >
                <p>Portfolio</p>
              </NavLink>
              <NavLink
                className="register-button-a"
                activeClassName="Header-button-selected"
                to="/transfers"
              >
                <p>Transfers</p>
              </NavLink>
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
                    <NavLink
                      className="Header-logout-button display-xs"
                      to="/portfolio"
                    >
                      <p>Portfolio</p><i className="fab fa-bitcoin" />
                    </NavLink>
                    <hr className="links-divider display-xs" />
                    <NavLink
                      className="Header-logout-button display-xs"
                      to="/transfers"
                    >
                      <p>Transfers</p><i className="fas fa-exchange-alt" />
                    </NavLink>
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

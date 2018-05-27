import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
import Notify from './notify.jsx';
import Detail from './detail.jsx';
import Detail1 from './instdetail.jsx';
import Detail2 from './engdetail.jsx';

class Finalprof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isplaced: true,
      profile: null, /* add the placement status value {this.props.placed} */
    };
  }
  componentWillMount() {
    fetch('/profile', {
      method: 'GET',
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          profile: response.profile,
        });
      });
  }
  show() {
    if (this.state.isplaced) {
      return <Notify />;
    }
  }
  render() {
    if (this.state.profile !== null) {
      console.log(this.state.profile);
      return (
        <div>
          {this.show()}
          <Detail />
          <Detail1 />
          <Detail2 />
        </div>
      );
    }
    return (<div>Fetching Profile details, Please wait</div>);
  }
}

export default withRouter(Finalprof);

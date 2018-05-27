import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
class Notify extends Component{
render(){	
  return(
          <div className="notification">
              Congratulations!!!! You Have Been Placed!!!
          </div>      
  		);
    }
}
export default withRouter(Notify);
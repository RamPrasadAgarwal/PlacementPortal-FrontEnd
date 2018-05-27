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
      isplaced: false,  /*add the placement status value {this.props.placed}*/
    };
  }
  show() {
    if (this.state.isplaced) { 
                              return <Notify />; }
                             }
	render(){
		return(
				<div>	
          {this.show()}
					<Detail/>
					<Detail1/>
					<Detail2/>
        </div>
			);
	}	
}

export default withRouter(Finalprof);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
function Details1(props) {
  return (
  			<div className="flex-container">
  				<div className={props.det}>
  					<div id ="heading"><b>{props.val}th Std Details</b></div><br /><hr />
  						<div className="flex-container1">
  							<div id="ques">
  								Instution studied:<br /><br />
  								{props.val}th Board:<br /><br />
  								{props.val}th Percentage:<br /><br />
  								{props.val}th Passing Year:<br /><br />
  							</div>
  							<div id="ans">
  								{props.ans1}<br /><br />
                  {props.ans2}<br /><br />
                  {props.ans3}<br /><br />
                  {props.ans4}<br /><br />
  							</div>
  						</div>	
  				</div>
			</div>
 );
}
class Detail1 extends Component {
  render(){
    return(
        <div> 
        
          <Details1
            det="detail"
            val="10"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
		  <Details1
            det="detail1"
            val="12"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
        </div>  
         );
        }
     }     
export default withRouter(Detail1);          
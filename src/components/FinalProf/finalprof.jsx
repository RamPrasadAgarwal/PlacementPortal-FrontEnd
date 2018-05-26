import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
function Detail1(props) {
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
function Detail2(props) {
  return (
  			<div class="flex-container">
  				<div class="detail2">
  					<div id ="heading"><b>Engineering Details</b></div><br /><hr />
  						<div class="flex-container1">
  							<div id="ques">
  								1st Sem SGPA:<br /><br />
  								2nd Sem SGPA:<br /><br />
  								3rd Sem SGPA:<br /><br />
  								4th Sem SGPA:<br /><br />
  								5th Sem SGPA:<br /><br />
  								6th Sem SGPA:<br /><br />
  								7th Sem SGPA:<br /><br />
  								8th Sem SGPA:<br /><br />
  								Total Credits Earned:<br /><br />
								  Cleared Arrears:<br /><br />
  							</div>
  							<div id="ans">
  								{props.sgpa1}<br /><br />
                  {props.sgpa2}<br /><br />
                  {props.sgpa3}<br /><br />
                  {props.sgpa4}<br /><br />
                  {props.sgpa5}<br /><br />
                  {props.sgpa6}<br /><br />
                  {props.sgpa7}<br /><br />
                  {props.sgpa8}<br /><br />
                  {props.totcred}<br /><br />
                  {props.clearr}<br /><br />
  							</div>
                <div id="ques1">
                  Credits Earned in 1st Sem:<br /><br />
                  Credits Earned in 2nd Sem:<br /><br />
                  Credits Earned in 3rd Sem:<br /><br />
                  Credits Earned in 4th Sem:<br /><br />     
                  Credits Earned in 5th Sem:<br /><br />
                  Credits Earned in 6th Sem:<br /><br />     
                  Credits Earned in 7th Sem:<br /><br />
                  Credits Earned in 8th Sem:<br /><br />     
                  No of Subjects cleared in mute:<br /><br />
                  Current Arrears:<br /><br />
                </div>
                <div id="ans">
                  {props.cred1}<br /><br />
                  {props.cred2}<br /><br />
                  {props.cred3}<br /><br />
                  {props.cred4}<br /><br />
                  {props.cred5}<br /><br />
                  {props.cred6}<br /><br />
                  {props.cred7}<br /><br />
                  {props.cred8}<br /><br />
                  {props.mute}<br /><br />
                  {props.curarr}<br /><br />
                </div>
  						</div>	
  				</div>
			</div>
	);
}
class Finalprof extends Component {
	render(){
		return(
				<div>	
					<div class="profile">
            <div id ="heading"><b>SHETTY HARSHIT ARUN</b></div><br/>
						<div id="heading1">COMPUTER SCIENCE AND ENGINEERING</div>
						<div id="heading2">4NI14CS080</div><br/>	
            <div id="heading3">
              Gender:Male <br />
              Phone No:8296367189<br />
              Email: harshit1806@gmail.com<br />
              Date of Birth:18/06/1996<br />
              CGPA: 8.71
            </div><br />
            <div className="form-submit3">
              <button type="submit">
                Edit Profile
              </button>
            </div>			
					</div>
					<Detail1
            det="detail"
            val="10"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
					<Detail1
            det="detail1"
            val="12"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
					<Detail2 
            sgpa1="9"
            sgpa2="9"
            sgpa3="9"
            sgpa4="9.5"
            sgpa5="8.5"
            sgpa6="6"
            sgpa7="7"
            sgpa8="8"
            totcred="200"
            clearr="1"
            cred1="25"
            cred2="25"
            cred3="25"
            cred4="25"
            cred5="25"
            cred6="25"
            cred7="25"
            cred8="25"
            mute="25"
            curarr="25"
          />
        </div>
			);
	}	
}

export default withRouter(Finalprof);
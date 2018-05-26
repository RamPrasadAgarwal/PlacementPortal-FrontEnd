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
  							<div id="ques1">
  								1st Sem CGPA:<br /><br />
  								2nd Sem CGPA:<br /><br />
  								3rd Sem CGPA:<br /><br />
  								4th Sem CGPA:<br /><br />
  								5th Sem CGPA:<br /><br />
  								6th Sem CGPA:<br /><br />
  								7th Sem CGPA:<br /><br />
  								8th Sem CGPA:<br /><br />
  								Total Credits Earned:<br /><br />
								  Cleared Arrears:<br /><br />
  							</div>
  							<div id="ans1">
  								{props.cgpa1}<br /><br />
                  {props.cgpa2}<br /><br />
                  {props.cgpa3}<br /><br />
                  {props.cgpa4}<br /><br />
                  {props.cgpa5}<br /><br />
                  {props.cgpa6}<br /><br />
                  {props.cgpa7}<br /><br />
                  {props.cgpa8}<br /><br />
                  {props.totcred}<br /><br />
                  {props.clearr}<br /><br />
  							</div>
                <div id="ques1">
                  Credits Earned in Sem1:<br /><br />
                  Credits Earned in Sem2:<br /><br />
                  Credits Earned in Sem3:<br /><br />
                  Credits Earned in Sem4:<br /><br />     
                  Credits Earned in Sem5:<br /><br />
                  Credits Earned in Sem6:<br /><br />     
                  Credits Earned in Sem1:<br /><br />
                  Credits Earned in Sem1:<br /><br />     
                  No of Subjects cleared in mute:<br /><br />
                  Current Arrears:<br /><br />
                </div>
                <div id="ans1">
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
            cgpa1=""
            cgpa2=""
            cgpa3=""
            cgpa4=""
            cgpa5=""
            cgpa6=""
            cgpa7=""
            cgpa8=""
            totcred=""
            clearr=""
            cred1=""
            cred2=""
            cred3=""
            cred4=""
            cred5=""
            cred6=""
            cred7=""
            cred8=""
            mute=""
            curarr=""
          />
        </div>
			);
	}	
}

export default withRouter(Finalprof);
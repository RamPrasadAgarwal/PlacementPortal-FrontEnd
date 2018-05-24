import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
import image from './ashu.jpg'
function Detail1(props) {
  return (
    <div className="flex-container">
  		<div className="detail">
  			<div id ="heading"><b>Personal Details</b></div><br /><hr />
  				<div className="flex-container1">
  					<div id="ques">
  						Name:<br /><br />
  						USN:<br /><br />
  						Branch:<br /><br />
  						Gender:<br /><br />
  						Phone No:<br /><br />
  						Date of Birth:<br /><br />
  					</div>
  					<div id="ans">
  						{props.ans1}<br /><br />
              {props.ans2}<br /><br />
              {props.ans3}<br /><br />
              {props.ans4}<br /><br />
              {props.ans5}<br /><br />
              {props.ans6}<br /><br />
  					</div>
  				</div>	
  		</div>
	</div>
  );
}
function Detail2(props) {
  return (
  			<div className="flex-container">
  				<div className="detail1">
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
function Detail3(props) {
  return (
  			<div class="flex-container">
  				<div class="detail2">
  					<div id ="heading"><b>Engineering Details</b></div><br /><hr />
  						<div class="flex-container1">
  							<div id="ques">
  								1st Sem CGPA:<br /><br />
  								Credits Earned in Sem1:<br /><br />
  								2nd Sem CGPA:<br /><br />
  								Credits Earned in Sem2:<br /><br />
  								3rd Sem CGPA:<br /><br />
  								Credits Earned in Sem3:<br /><br />
  								4t Sem CGPA:<br /><br />
  								Credits Earned in Sem4:<br /><br />			
  								5th Sem CGPA:<br /><br />
  								Credits Earned in Sem5:<br /><br />
  								6th Sem CGPA:<br /><br />
  								Credits Earned in Sem6:<br /><br />			
  								7th Sem CGPA:<br /><br />
  								Credits Earned in Sem1:<br /><br />
  								8th Sem CGPA:<br /><br />
  								Credits Earned in Sem1:<br /><br />			
  								Total Credits Earned:<br /><br />
								  No of Subjects cleared in mute:<br /><br />
								  Cleared Arrears:<br /><br />
								  Current Arrears:<br /><br />
  							</div>
  							<div id="ans">
  								{props.ans1}<br /><br />
                  {props.ans2}<br /><br />
                  {props.ans3}<br /><br />
                  {props.ans4}<br /><br />
                  {props.ans5}<br /><br />
                  {props.ans6}<br /><br />
                  {props.ans7}<br /><br />
                  {props.ans8}<br /><br />
                  {props.ans9}<br /><br />
                  {props.ans10}<br /><br />
                  {props.ans11}<br /><br />
                  {props.ans12}<br /><br />
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
						<center><img src={image}/></center>  
						<div id ="heading"><b>SHETTY HARSHIT ARUN</b></div><br/>
						<div id="heading1">COMPUTER SCIENCE AND ENGINEERING</div>
						<div id="heading2">4NI14CS080</div><br/>				
					</div>
					<Detail1 
            ans1=""
            ans2=""
            ans3=""
            ans4=""
            ans5=""
            ans6=""
          />
					<Detail2
            val="10"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
					<Detail2
            val="12"
            ans1=""
            ans2=""
            ans3=""
            ans4=""
          />
					<Detail3 
            ans1=""
            ans2=""
            ans3=""
            ans4=""
            ans5=""
            ans6=""
            ans7=""
            ans8=""
            ans9=""
            ans10=""
            ans11=""
            ans12=""
          />
           <div className="form-submit">
          <button type="submit">
              Edit Profile
          </button>
        </div>
        </div>
			);
	}	
}

export default withRouter(Finalprof);
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import Form from '../Form/form';
//import PropTypes from 'prop-types';
import './studentprof.css';
function Tab(props){
	return(
				
					<tr>
    					<td>{props.td1}</td>
    					<td>{props.td2}</td>
    					<td>{props.td3}</td>
    					<td>{props.td4}</td>
    				</tr>	
  					
		 );
}
class Studentprof extends Component{
	render(){
		return(
					<div>
						<div class="prof">
  								<img src="pics/ashu.jpg" alt="image of student"/>	
								<div id ="heading"><b>SHETTY HARSHIT ARUN</b></div>
								<div id="heading1">COMPUTER SCIENCE AND ENGINEERING</div>
								<div id="heading2">4NI14CS080</div><br/>
								<div id="heading3">
									Gender:Male <br/>
									Phone No:8296367189<br/>
									Date of Birth:18th June,1996
								</div><br/>
						</div><br/>	
						<table id="academics">
  							<tr>
  								<th colspan="4"><center>Academic Details</center></th>
  							</tr>
  							<Tab td1="Institution Attended in 10th "
  						   		 td2=""	
  						   		 td3="10th Board"
  						         td4=""			
    					    />
    					    <Tab td1="10th Percentage "
  						        td2=""	
  						        td3="10th Passing Year"
  						        td4=""			
    					    />
    					    <Tab td1="Institution Attended in 12th "
  						        td2=""	
  						        td3="12th Board"
  						        td4=""			
    					    />
   						  	<Tab td1="12th Percentage "
  						   		 td2=""	
  						   		 td3="12th Passing Year"
  						   		 td4=""			
    					    />
    					    <Tab td1="Sem1 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 1"
  						         td4=""			
    					    />
    					   	<Tab td1="Sem2 CGPA "
  						       	 td2=""	
  						       	 td3="Credits Earned in Sem 2"
  						         td4=""			
  							/>
  							<Tab td1="Sem3 CGPA "
  						   		 td2=""	
  						   		 td3="Credits Earned in Sem 3"
  						         td4=""			
    					    />
    					    <Tab td1="Sem4 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 4"
  						         td4=""			
    					    />
    					    <Tab td1="Sem5 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 5"
  						         td4=""			
    					    />
    					    <Tab td1="Sem6 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 6"
  						         td4=""			
    					    />
    					    <Tab td1="Sem7 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 7"
  						         td4=""			
    					    />
    					    <Tab td1="Sem8 CGPA "
  						         td2=""	
  						         td3="Credits Earned in Sem 8"
  						         td4=""			
    					    />
    					    <Tab td1="Total Credits Earned "
  								 td2=""	
  						         td3="No of Subjects cleared in mute"
  						         td4=""			
    					    />
    					    <Tab td1="Cleared Arrears "
  						         td2=""	
  						         td3="Current Arrears"
  						         td4=""			
    					    />
    					</table>
				    </div>
			   );
	}
}
export default withRouter(Studentprof);
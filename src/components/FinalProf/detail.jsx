import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';
function Details(props){
  return(
          <div class="profile">
            <div id ="heading"><b>{props.name}</b></div><br/>
            <div id="heading1">{props.branch}</div>
            <div id="heading2">{props.usn}</div><br/>  
            <div id="heading3">
              Gender:{props.gender} <br />
              Phone No:{props.phno}<br />
              Email:{props.mail}<br />
              Date of Birth:{props.bdate}<br />
              CGPA:{props.cgpa}<br />
              Placement Status:{props.place}
            </div><br />
            <div className="form-submit3">
              <button type="submit">
                Edit Profile
              </button>
            </div>      
          </div>
  );
}
class Detail extends Component {
  render(){
    return(
        <div> 
        
          <Details
            name="SHETTY HARSHIT ARUN"
            branch="Computer Science"
            usn="4ni14cs080"
            gender="Male"
            phno="8296367189"
            mail="harshit1806@gmail.com"
            bdate="18/06/1996"
            cgpa="9.3"s
          />
        </div>  
         );
        }
     }     
export default withRouter(Detail);          
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
              Email:{props.email}<br />
              Date of Birth:{props.bdate}<br />
              CGPA:{props.cgpa}<br />
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
            name={this.state.profile.fullname.toUpperCase()}
            branch={this.state.profile.branch}
            usn={this.state.profile.usn.toUpperCase()}
            gender={this.state.profile.sex}
            phno={this.state.profile.phone}
            email={this.state.profile.e-mail}
            bdate={this.state.profile.dob}
            cgpa={this.state.profile.cgpa}
          />
        </div>  
         );
        }
     }     
export default withRouter(Detail);          
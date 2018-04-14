import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import Form from '../Form/form';
import PropTypes from 'prop-types';
import './companyprofile.css';

class Detail extends Component
{
	render()
	{
		return(

					<div className="company-details1">
          				<div className="div2">
							{this.props.value1}:
          				</div>
          				<div className="name1">
          					{this.props.value2}
          				</div>
          				<div className="div2">
							{this.props.value3}:
         		 		</div>
          				<div className="name1">
          					{this.props.value4}
          				</div>
       				 </div>

			);
	}
}
class Detail1 extends Component
{
  render()
  {
    return(

        <div className="company-details1">
          	<div className="div1">
              {this.props.val1}:
          	</div>
          	<div className="name"> 
              {this.props.val2}
          	</div>
        </div>

      );
  }
}
class Companyprofile extends Component {
render() {
    return (
      <div>
        <div className="heading">
          	<h1><center>Company Name</center></h1>
        </div>
        <div className="detail-heading1">
				Company Details
        </div>
        <Detail1 
        	val1="About Company"
        	val2=""
        />
        <Detail 
        	value1="Test Date"
        	value2=""
        	value3="Interview Date"
        	value4=""
        />
        <Detail 
        	value1="Branch"
        	value2=""
        	value3="History"
        	value4=""
        />

        <Detail 
        	value1="10th Percentage"
        	value2=""
        	value3="12th Percentage"
        	value4=""
        />
        <Detail 
        	value1="CGPA"
        	value2=""
        	value3="Job Location"
        	value4=""
        />
        <Detail 
        	value1="Position"
        	value2=""
        	value3="Salary"
        	value4=""
        />
         <Detail1 
        	val1="Job Description"
        	val2=""
        />
        <br /><br />
        <div className="form-submit">
          <button
            type="submit">
			Register
          </button>
        </div>
      </div>
    );
  }




}
export default withRouter(Companyprofile);

import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './companyprofile.css';


class Companyprofile extends Component {
render()
{
	return(
		<div>
            <div class="heading">
				<h1><center>Company Name</center></h1>
			</div>			
			<div class="detail-heading1">
				Company Details
			</div>
			<div class="company-details">
				<div class="div1">
					About Company:
				</div>	
				<div class="name">
					
				</div>	
			</div>		
			<div class="company-details">
				<div class="div2">
					Test Date:
				</div>	
				<div class="name1"></div>
				<div class="div2">
					Interview Date:
				</div>	
				<div class="name1"></div>
			</div>
			<div class="company-details">
				<div class="div2">
				 	Branch:
				</div>	
				<div class="name1"></div>
				<div class="div2">
					History:
				</div>	
				<div class="name1"></div>
			</div>	
			<div class="company-details">
				<div class="div2">
					10th percentage:
				</div>	
				<div class="name1"></div>
				<div class="div2">
					12th percentage:
				</div>	
				<div class="name1"></div>
			</div>
			<div class="company-details">
				<div class="div2">
					CGPA:
				</div>	
				<div class="name1"></div>
				<div class="div2">
					Job Location:
				</div>	
				<div class="name1"></div>
			</div>
			<div class="company-details">
				<div class="div2">
					Position:
				</div>	
				<div class="name1"></div>
				<div class="div2">
					Salary:
				</div>	
				<div class="name1"></div>
			</div>
        	<div class="company-details">
				<div class="div1">
					Job Description:
				</div>	
				<div class="name"></div>	
			</div>
		</div>
);
}




}
export default withRouter(Companyprofile);	
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './studentprofile.css';

class Detail extends Component {
  render() {
    return (

      <div className="company-details">
        <div className="div3">
          {this.props.value1}:
        </div>
        <div className="name2">
          {this.props.value2}
        </div>
        <div className="div3">
          {this.props.value3}:
        </div>
        <div className="name2">
          {this.props.value4}
        </div>
      </div>

    );
  }
}
class Detail1 extends Component {
  render() {
    return (
      <div className="company-details">
        <div className="div4">
          {this.props.val1}:
        </div>
        <div className="name3">
          {this.props.val2}
        </div>
      </div>

    );
  }
}
class Studentprofile extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h1><center>Student Profile</center></h1>
        </div>
        <hr />
        <center><input type="image" src="nie.jpg" alt="Submit" width="48px" height="48px" /></center>
        <div className="detail-heading">
                Congratulations!!!!! you have been Placed
        </div>

        <div className="detail-heading">
				       Personal Details
        </div>

        <Detail
          value1="Name"
          value2=""
          value3="USN"
          value4=""
        />
        <Detail
          value1="Gender"
          value2=""
          value3="Date of Birth"
          value4=""
        />
        <Detail1
          val1="Address"
          val2=""
        />

        <Detail
          value1="Phone Number"
          value2=""
          value3="Email"
          value4=""
        />
        <Detail
          value1="Branch"
          value2=""
          value3="CET Ranking"
          value4=""
        />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <div className="detail-heading">
                Academic Details
        </div>
        <Detail
          value1="Institution attended in 10th Std"
          value2=""
          value3="10th Board"
          value4=""
        />
        <Detail
          value1="10th Percentage"
          value2=""
          value3="10th Passing Year"
          value4=""
        />
        <Detail
          value1="Institution attended in 12th Std"
          value2=""
          value3="12th Board"
          value4=""
        />
        <Detail
          value1="12th Percentage"
          value2=""
          value3="12th Passing Year"
          value4=""
        />
        <Detail
          value1="Sem1 CGPA"
          value2=""
          value3="Credits Earned In 1 Sem"
          value4=""
        />
        <Detail
          value1="Sem2 CGPA"
          value2=""
          value3="Credits Earned In 2 Sem"
          value4=""
        />
        <Detail
          value1="Sem3 CGPA"
          value2=""
          value3="Credits Earned In 3 Sem"
          value4=""
        />
        <Detail
          value1="Sem4 CGPA"
          value2=""
          value3="Credits Earned In 4 Sem"
          value4=""
        />
        <Detail
          value1="Sem5 CGPA"
          value2=""
          value3="Credits Earned In 5 Sem"
          value4=""
        />
        <Detail
          value1="Sem6 CGPA"
          value2=""
          value3="Credits Earned In 6 Sem"
          value4=""
        />
        <Detail
          value1="Sem7 CGPA"
          value2=""
          value3="Credits Earned In 7 Sem"
          value4=""
        />
        <Detail
          value1="Sem8 CGPA"
          value2=""
          value3="Credits Earned In 8 Sem"
          value4=""
        />
        <Detail
          value1="Total Credits Earned"
          value2=""
          value3="No of Subjects cleared in mute"
          value4=""
        />
        <Detail
          value1="Cleared Arrears"
          value2=""
          value3="Current Arrears"
          value4=""
        />
        <br /><br />
        <div className="form-submit">
          <button
            type="submit"
          >
			Register
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(Studentprofile);

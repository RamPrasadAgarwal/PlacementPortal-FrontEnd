import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './studentprof.css';

function Tab(props) {
  return (
    <tr>
      <td>{props.td1}</td>
      <td>{props.td2}</td>
      <td>{props.td3}</td>
      <td>{props.td4}</td>
    </tr>
  );
}
class Studentprof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }
  componentWillMount() {
    fetch('/profile', {
      method: 'GET',
      headers: { authtoken: window.localStorage.getItem('placementtoken') },
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          profile: response.profile,
        });
      });
  }
  render() {
    if (this.state.profile !== null) {
      console.log(this.state.profile);
      return (
        <div>
          <div className="prof">
            <div id="heading"><b>{this.state.profile.fullname.toUpperCase()}</b></div>
            <div id="heading1">{this.state.profile.branch}</div>
            <div id="heading2">{this.state.profile.usn.toUpperCase()}</div><br />
            <div id="heading3">
						Gender: {this.state.profile.sex} <br />
						Phone No: {this.state.profile.phone}<br />
						Email: {this.state.profile.email}<br />
						Date of Birth: {this.state.profile.dob} <br /><br />
            CGPA: {this.state.profile.cgpa}
              <div className="form-submit2">
                <button
                  type="submit"
                  onClick={() => { this.props.history.push('/editprofile'); }}
                > Update
                </button>
              </div>
            </div>
            <br />
          </div><br />
          <table id="academics">
            <tr>
              <th colSpan="4"><center>Academic Details</center></th>
            </tr>
            <Tab
              td1="Institution Attended in 10th "
              td2={this.state.profile.xinstitute}
              td3="10th Board"
              td4={this.state.profile.xboard}
            />
            <Tab
              td1="10th Percentage "
              td2={this.state.profile.xmarks}
              td3="10th Passing Year"
              td4={this.state.profile.xyear}
            />
            <Tab
              td1="Institution Attended in 12th "
              td2={this.state.profile.xiiinstitute}
              td3="12th Board"
              td4={this.state.profile.xiiboard}
            />
            <Tab
              td1="12th Percentage "
              td2={this.state.profile.xiimarks}
              td3="12th Passing Year"
              td4={this.state.profile.xiiyear}
            />
            <Tab
              td1="Sem 1 CGPA "
              td2={this.state.profile.cgpa1}
              td3="Credits Earned in Sem 1"
              td4={this.state.profile.credit1}
            />
            <Tab
              td1="Sem 2 CGPA "
              td2={this.state.profile.cgpa2}
              td3="Credits Earned in Sem 2"
              td4={this.state.profile.credit2}
            />
            <Tab
              td1="Sem 3 CGPA "
              td2={this.state.profile.cgpa3}
              td3="Credits Earned in Sem 3"
              td4={this.state.profile.credit3}
            />
            <Tab
              td1="Sem 4 CGPA "
              td2={this.state.profile.cgpa4}
              td3="Credits Earned in Sem 4"
              td4={this.state.profile.credit4}
            />
            <Tab
              td1="Sem 5 CGPA "
              td2={this.state.profile.cgpa5}
              td3="Credits Earned in Sem 5"
              td4={this.state.profile.credit5}
            />
            <Tab
              td1="Sem 6 CGPA "
              td2={this.state.profile.cgpa6}
              td3="Credits Earned in Sem 6"
              td4={this.state.profile.credit6}
            />
            <Tab
              td1="Sem 7 CGPA "
              td2={this.state.profile.cgpa7}
              td3="Credits Earned in Sem 7"
              td4={this.state.profile.credit7}
            />
            <Tab
              td1="Sem 8 CGPA "
              td2={this.state.profile.cgpa8}
              td3="Credits Earned in Sem 8"
              td4={this.state.profile.credit8}
            />
            <Tab
              td1="Total Credits Earned "
              td2={this.state.profile.totalcredit}
              td3="No of Subjects cleared in mute"
              td4={this.state.profile.mutebacklog >= 0 ? this.state.profile.mutebacklog : ''}
            />
            <Tab
              td1="Cleared Arrears "
              td2={this.state.profile.clearbacklog >= 0 ? this.state.profile.clearbacklog : ''}
              td3="Current Arrears"
              td4={this.state.profile.currentbacklog >= 0 ? this.state.profile.currentbacklog : ''}
            />
          </table>
        </div>
      );
    }
    return (<div>Fetching Profile details, Please wait</div>);
  }
}
export default withRouter(Studentprof);

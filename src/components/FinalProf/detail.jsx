import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Form from '../Form/form';
// import PropTypes from 'prop-types';
import './finalprof.css';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="profile">
        <div id="heading"><b>{this.props.name}</b></div><br />
        <div id="heading1">{this.props.branch}</div>
        <div id="heading2">{this.props.usn}</div>
        <div id="heading2">CGPA: {this.props.cgpa}</div><br />
        <div className="flex-container1">
          <div id="heading3">
            <div id="ques">
          Email: <br />
          Gender:  <br />
          Contact: <br />
          DOB: <br />
            </div>
          </div>
          <div id="heading3">
            <div id="ques">
              {this.props.email}<br />
              {this.props.gender} <br />
              {this.props.phno}<br />
              {this.props.bdate}<br />
            </div>
          </div>
        </div><br />
        <div className="form-submit3">
          <button
            type="submit"
            onClick={() => { this.props.history.push('/editprofile'); }}
          >
                Edit Profile
          </button>
        </div>
      </div>
    );
  }
}
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isplaced: false,
      profile: null, /* add the placement status value {this.props.placed} */
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
      return (
        <div>
          <Details
            history={this.props.history}
            name={this.state.profile.fullname.toUpperCase()}
            branch={this.state.profile.branch}
            usn={this.state.profile.usn.toUpperCase()}
            gender={this.state.profile.sex}
            phno={this.state.profile.phone}
            email={this.state.profile.email}
            bdate={this.state.profile.dob}
            cgpa={this.state.profile.cgpa}
          />
        </div>
      );
    }
    return (<div>Fetching Profile details, Please wait</div>);
  }
}
export default withRouter(Detail);

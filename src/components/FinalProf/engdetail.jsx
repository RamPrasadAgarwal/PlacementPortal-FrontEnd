import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './finalprof.css';

function Details2(props) {
  return (
    <div className="flex-container">
      <div className="detail2">
        <div id="heading"><b>Engineering Details</b></div><br /><hr />
        <div className="flex-container1">
          <div id="ques">
  								1st Sem SGPA:<br /><br />
  								2nd Sem SGPA:<br /><br />
  								3rd Sem SGPA:<br /><br />
  								4th Sem SGPA:<br /><br />
  								5th Sem SGPA:<br /><br />
  								6th Sem SGPA:<br /><br />
  								7th Sem SGPA:<br /><br />
  								8th Sem SGPA:<br /><br />
  								Total Credits Earned:<br /><br />
								  Cleared Arrears:<br /><br />
          </div>
          <div id="ans">
            {props.sgpa1}<br /><br />
            {props.sgpa2}<br /><br />
            {props.sgpa3}<br /><br />
            {props.sgpa4}<br /><br />
            {props.sgpa5}<br /><br />
            {props.sgpa6}<br /><br />
            {props.sgpa7}<br /><br />
            {props.sgpa8}<br /><br />
            {props.totcred}<br /><br />
            {props.clearr}<br /><br />
          </div>
          <div id="ques1">
                			  Credits Earned in 1st Sem:<br /><br />
                			  Credits Earned in 2nd Sem:<br /><br />
                			  Credits Earned in 3rd Sem:<br /><br />
                			  Credits Earned in 4th Sem:<br /><br />
                			  Credits Earned in 5th Sem:<br /><br />
                			  Credits Earned in 6th Sem:<br /><br />
                			  Credits Earned in 7th Sem:<br /><br />
                			  Credits Earned in 8th Sem:<br /><br />
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
class Detail2 extends Component {
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
      console.log(this.state.profile);
      return (
        <div>

          <Details2
            sgpa1={this.state.profile.cgpa1}
            sgpa2={this.state.profile.cgpa2}
            sgpa3={this.state.profile.cgpa3}
            sgpa4={this.state.profile.cgpa4}
            sgpa5={this.state.profile.cgpa5}
            sgpa6={this.state.profile.cgpa6}
            sgpa7={this.state.profile.cgpa7}
            sgpa8={this.state.profile.cgpa8}
            totcred={this.state.profile.totalcredit}
            clearr={this.state.profile.clearbacklog >= 0 ? this.state.profile.clearbacklog : ''}
            cred1={this.state.profile.credit1}
            cred2={this.state.profile.credit2}
            cred3={this.state.profile.credit3}
            cred4={this.state.profile.credit4}
            cred5={this.state.profile.credit5}
            cred6={this.state.profile.credit6}
            cred7={this.state.profile.credit7}
            cred8={this.state.profile.credit8}
            mute={this.state.profile.mutebacklog >= 0 ? this.state.profile.mutebacklog : ''}
            curarr={this.state.profile.currentbacklog >= 0 ? this.state.profile.currentbacklog : ''}
          />
        </div>
      );
    }
    return (<div>Fetching Profile details, Please wait</div>);
  }
}
export default withRouter(Detail2);
